import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AIMessage } from '../types';

interface ChatState {
  messages: AIMessage[];
  isGenerating: boolean;
  currentProvider: string | null;
  
  addMessage: (message: Omit<AIMessage, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  setGenerating: (isGenerating: boolean) => void;
  setProvider: (provider: string | null) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isGenerating: false,
      currentProvider: null,
      
      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              ...message,
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              timestamp: Date.now(),
            },
          ],
        })),
      
      clearMessages: () => set({ messages: [] }),
      
      setGenerating: (isGenerating) => set({ isGenerating }),
      
      setProvider: (provider) => set({ currentProvider: provider }),
    }),
    {
      name: 'chat-state',
    }
  )
);
