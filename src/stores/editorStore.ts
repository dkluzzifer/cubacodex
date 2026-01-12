import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { File } from '../types';

interface EditorState {
  files: File[];
  activeFileId: string | null;
  openFiles: string[];
  
  addFile: (file: File) => void;
  updateFile: (id: string, updates: Partial<File>) => void;
  removeFile: (id: string) => void;
  setActiveFile: (id: string | null) => void;
  openFile: (id: string) => void;
  closeFile: (id: string) => void;
  clearAll: () => void;
}

export const useEditorStore = create<EditorState>()(
  persist(
    (set, get) => ({
      files: [],
      activeFileId: null,
      openFiles: [],
      
      addFile: (file) =>
        set((state) => ({
          files: [...state.files, file],
        })),
      
      updateFile: (id, updates) =>
        set((state) => ({
          files: state.files.map((f) =>
            f.id === id ? { ...f, ...updates } : f
          ),
        })),
      
      removeFile: (id) =>
        set((state) => ({
          files: state.files.filter((f) => f.id !== id),
          activeFileId: state.activeFileId === id ? null : state.activeFileId,
          openFiles: state.openFiles.filter((fId) => fId !== id),
        })),
      
      setActiveFile: (id) =>
        set(() => ({
          activeFileId: id,
        })),
      
      openFile: (id) =>
        set((state) => ({
          openFiles: state.openFiles.includes(id)
            ? state.openFiles
            : [...state.openFiles, id],
          activeFileId: id,
        })),
      
      closeFile: (id) =>
        set((state) => {
          const newOpenFiles = state.openFiles.filter((fId) => fId !== id);
          const newActiveId =
            state.activeFileId === id
              ? newOpenFiles[newOpenFiles.length - 1] || null
              : state.activeFileId;
          return {
            openFiles: newOpenFiles,
            activeFileId: newActiveId,
          };
        }),
      
      clearAll: () =>
        set({
          files: [],
          activeFileId: null,
          openFiles: [],
        }),
    }),
    {
      name: 'editor-state',
    }
  )
);
