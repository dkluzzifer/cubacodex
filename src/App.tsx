import React from 'react';
import { Bot, Send, Loader2, FileCode, Save, FolderOpen, Settings } from 'lucide-react';
import { MonacoEditor } from './ui/editor/MonacoEditor';
import { ChatPanel } from './ui/chat/ChatPanel';
import { FileExplorer } from './ui/sidebar/FileExplorer';
import { CustomTitlebar } from './ui/titlebar/CustomTitlebar';
import { useEditorStore } from './stores/editorStore';

export default function App() {
  const { activeFileId, files } = useEditorStore();
  const activeFile = files.find(f => f.id === activeFileId);
  
  return (
    <div className="h-screen w-screen bg-background flex flex-col font-sans">
      <CustomTitlebar />
      
      <div className="flex-1 flex overflow-hidden">
        <FileExplorer />
        
        <div className="flex-1 flex flex-col">
          <div className="h-10 bg-bg-secondary border-b border-border-color flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-4 w-4 text-accent" />
              <span className="text-sm text-text-primary">
                {activeFile?.name || 'Sin archivo seleccionado'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-text-secondary">
                {activeFile?.language?.toUpperCase() || 'PLAINTEXT'}
              </span>
            </div>
          </div>
          
          <MonacoEditor />
        </div>
        
        <ChatPanel />
      </div>
    </div>
  );
}
