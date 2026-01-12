import { useState } from 'react';
import { Folder, File as FileIcon, Plus, FolderOpen, Save } from 'lucide-react';
import { useEditorStore } from '../../stores/editorStore';
import { fileManager } from '../../core/FileManager';

export function FileExplorer() {
  const [isOpen, setIsOpen] = useState(true);
  const { files, addFile, openFile, activeFileId } = useEditorStore();
  const [newFileName, setNewFileName] = useState('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  
  const handleCreateFile = async () => {
    if (!newFileName.trim()) return;
    
    const newFile = fileManager.createNewFile(newFileName);
    addFile(newFile);
    openFile(newFile.id);
    setNewFileName('');
    setShowNewFileInput(false);
  };
  
  const handleOpenFile = async () => {
    const path = await fileManager.openFileSelector();
    if (path) {
      try {
        const content = await fileManager.readFile(path);
        const filename = path.split(/[/\\]/).pop() || 'untitled';
        const newFile = fileManager.createNewFile(filename, path);
        newFile.content = content;
        addFile(newFile);
        openFile(newFile.id);
      } catch (error) {
        console.error('Error al abrir archivo:', error);
      }
    }
  };
  
  const handleSaveFile = async () => {
    if (!activeFileId) return;
    const file = files.find(f => f.id === activeFileId);
    if (file) {
      try {
        const path = await fileManager.saveFileSelector(file.name);
        if (path) {
          await fileManager.writeFile(path, file.content);
        }
      } catch (error) {
        console.error('Error al guardar archivo:', error);
      }
    }
  };
  
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-12 h-10 bg-bg-secondary border-r border-border-color flex items-center justify-center hover:bg-bg-tertiary transition-colors"
      >
        <Folder className="h-5 w-5 text-text-secondary" />
      </button>
    );
  }
  
  return (
    <div className="w-64 bg-bg-secondary border-r border-border-color flex flex-col">
      <div className="h-10 px-3 border-b border-border-color flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Folder className="h-4 w-4 text-text-secondary" />
          <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
            Explorador
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button 
            onClick={handleOpenFile}
            className="hover:bg-bg-tertiary p-1 rounded transition-colors"
            title="Abrir archivo"
          >
            <FolderOpen className="h-4 w-4 text-text-secondary" />
          </button>
          <button 
            onClick={handleSaveFile}
            className="hover:bg-bg-tertiary p-1 rounded transition-colors"
            title="Guardar archivo"
            disabled={!activeFileId}
          >
            <Save className="h-4 w-4 text-text-secondary disabled:opacity-50" />
          </button>
          <button 
            onClick={() => setShowNewFileInput(true)}
            className="hover:bg-bg-tertiary p-1 rounded transition-colors"
            title="Nuevo archivo"
          >
            <Plus className="h-4 w-4 text-text-secondary" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        {showNewFileInput && (
          <div className="mb-2">
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateFile();
                if (e.key === 'Escape') setShowNewFileInput(false);
              }}
              onBlur={() => !newFileName && setShowNewFileInput(false)}
              placeholder="nombre.js"
              className="w-full bg-bg-tertiary border border-border-color rounded px-2 py-1 text-xs text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
              autoFocus
            />
          </div>
        )}
        
        <div className="space-y-1">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => openFile(file.id)}
              className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded transition-colors ${
                activeFileId === file.id
                  ? 'bg-bg-tertiary text-text-primary'
                  : 'text-text-secondary hover:bg-bg-tertiary'
              }`}
            >
              <FileIcon className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm truncate flex-1 text-left">{file.name}</span>
              {file.isModified && (
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              )}
            </button>
          ))}
          
          {files.length === 0 && (
            <div className="text-center py-8">
              <FileIcon className="h-8 w-8 text-text-secondary mx-auto mb-2 opacity-50" />
              <p className="text-xs text-text-secondary">
                No hay archivos abiertos
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
