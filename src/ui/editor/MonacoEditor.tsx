import { Editor } from '@monaco-editor/react';
import { useEditorStore } from '../../stores/editorStore';

export function MonacoEditor() {
  const { files, activeFileId, updateFile } = useEditorStore();
  const activeFile = files.find(f => f.id === activeFileId);
  
  const handleEditorChange = (value: string | undefined) => {
    if (activeFileId && value !== undefined) {
      updateFile(activeFileId, {
        content: value,
        isModified: true,
      });
    }
  };
  
  if (!activeFile) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="text-6xl mb-4">📁</div>
          <h2 className="text-xl font-medium text-text-primary mb-2">
            Sin archivo seleccionado
          </h2>
          <p className="text-sm text-text-secondary">
            Abre o crea un archivo para comenzar
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 flex flex-col">
      <Editor
        height="100%"
        language={activeFile.language}
        value={activeFile.content}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: "'Fira Code', Consolas, Monaco, monospace",
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          contextmenu: true,
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'on',
          tabCompletion: 'on',
          formatOnPaste: true,
          formatOnType: true,
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          autoSurround: 'languageDefined',
        }}
        loading={
          <div className="flex items-center justify-center h-full text-text-secondary">
            Cargando editor...
          </div>
        }
      />
    </div>
  );
}
