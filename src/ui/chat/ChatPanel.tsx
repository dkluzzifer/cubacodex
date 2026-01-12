import { useState } from 'react';
import { Bot, Send, Loader2, Trash2, Settings } from 'lucide-react';
import { useChatStore } from '../../stores/chatStore';
import { orchestrator } from '../../ai/AIOrchestrator';
import { tokenManager } from '../../core/TokenManager';
import { useEditorStore } from '../../stores/editorStore';
import { renderMarkdown } from '../../lib/markdown-renderer';
import { formatTimestamp } from '../../lib/string-utils';

export function ChatPanel() {
  const [input, setInput] = useState('');
  const [action, setAction] = useState<'generate' | 'explain' | 'fix'>('generate');
  const { messages, addMessage, isGenerating, clearMessages } = useChatStore();
  const { files, activeFileId } = useEditorStore();
  const activeFile = files.find(f => f.id === activeFileId);
  
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userPrompt = input;
    setInput('');
    
    let context: string | undefined;
    
    if (action !== 'generate' && activeFile) {
      context = activeFile.content;
    }
    
    addMessage({ role: 'user', content: userPrompt });
    
    try {
      let response: string;
      
      if (action === 'explain' && activeFile) {
        response = await orchestrator.explainCode(activeFile.content, activeFile.language);
      } else if (action === 'fix' && activeFile) {
        const errorPrompt = userPrompt;
        response = await orchestrator.fixError(activeFile.content, errorPrompt);
      } else {
        const truncatedContext = context ? tokenManager.truncate(context) : undefined;
        response = await orchestrator.execute({
          prompt: userPrompt,
          context: truncatedContext,
          language: activeFile?.language,
        });
      }
      
      addMessage({ role: 'assistant', content: response });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      addMessage({ 
        role: 'assistant', 
        content: `❌ Error: ${errorMessage}` 
      });
    }
  };
  
  return (
    <div className="w-96 bg-bg-secondary border-l border-border-color flex flex-col">
      <div className="h-10 px-4 border-b border-border-color flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-text-primary">Asistente IA</span>
        </div>
        <button 
          onClick={clearMessages}
          className="hover:bg-bg-tertiary p-1 rounded transition-colors"
          title="Limpiar chat"
        >
          <Trash2 className="h-4 w-4 text-text-secondary" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <Bot className="h-12 w-12 text-text-secondary mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-text-primary mb-2">
              ¡Hola! Soy tu asistente de IA
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Puedo ayudarte a generar, explicar o corregir código
            </p>
            <div className="text-xs text-text-secondary space-y-1">
              <p>🎨 Generar código nuevo</p>
              <p>💡 Explicar código existente</p>
              <p>🔧 Corregir errores</p>
            </div>
          </div>
        )}
        
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.role === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs text-text-secondary">
                {msg.role === 'user' ? 'Tú' : 'IA'}
              </span>
              <span className="text-xs text-text-secondary">
                {formatTimestamp(msg.timestamp)}
              </span>
            </div>
            <div
              className={`max-w-[90%] rounded-lg px-3 py-2 ${
                msg.role === 'user'
                  ? 'bg-accent text-white'
                  : 'bg-bg-tertiary text-text-primary'
              }`}
            >
              {msg.role === 'user' ? (
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              ) : (
                <div
                  className="text-sm prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                />
              )}
            </div>
          </div>
        ))}
        
        {isGenerating && (
          <div className="flex items-center space-x-2 text-text-secondary">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Generando respuesta...</span>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-border-color">
        <div className="flex space-x-2 mb-2">
          <button
            onClick={() => setAction('generate')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              action === 'generate'
                ? 'bg-accent text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-border-color'
            }`}
          >
            Generar
          </button>
          <button
            onClick={() => setAction('explain')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              action === 'explain'
                ? 'bg-accent text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-border-color'
            }`}
            disabled={!activeFile}
          >
            Explicar
          </button>
          <button
            onClick={() => setAction('fix')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              action === 'fix'
                ? 'bg-accent text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-border-color'
            }`}
            disabled={!activeFile}
          >
            Corregir
          </button>
        </div>
        
        <div className="flex space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Escribe tu prompt aquí..."
            disabled={isGenerating}
            className="flex-1 bg-bg-tertiary border border-border-color rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary resize-none focus:outline-none focus:border-accent disabled:opacity-50"
            rows={3}
          />
          <button
            onClick={handleSend}
            disabled={isGenerating || !input.trim()}
            className="bg-accent hover:bg-accent-hover text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Enviar (Enter)"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        {activeFile && action === 'generate' && (
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="checkbox"
              id="include-context"
              checked
              className="rounded border-border-color"
            />
            <label htmlFor="include-context" className="text-xs text-text-secondary">
              Incluir código del archivo actual
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
