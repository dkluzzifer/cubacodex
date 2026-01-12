import { Minimize, Maximize2, X } from 'lucide-react';
import { appWindow } from '@tauri-apps/api/window';

export function CustomTitlebar() {
  const onMinimize = () => appWindow.minimize();
  const onMaximize = () => appWindow.toggleMaximize();
  const onClose = () => appWindow.close();
  
  return (
    <div className="h-10 bg-bg-tertiary border-b border-border-color flex items-center justify-between px-4 select-none">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-accent flex items-center justify-center">
          <span className="text-xs font-bold">C</span>
        </div>
        <span className="text-sm font-medium text-text-primary">CubaCodex</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMinimize}
          className="hover:bg-bg-secondary p-1 rounded transition-colors"
          title="Minimizar"
        >
          <Minimize className="h-4 w-4 text-text-secondary" />
        </button>
        <button 
          onClick={onMaximize}
          className="hover:bg-bg-secondary p-1 rounded transition-colors"
          title="Maximizar"
        >
          <Maximize2 className="h-4 w-4 text-text-secondary" />
        </button>
        <button 
          onClick={onClose}
          className="hover:bg-error p-1 rounded transition-colors"
          title="Cerrar"
        >
          <X className="h-4 w-4 text-text-primary" />
        </button>
      </div>
    </div>
  );
}
