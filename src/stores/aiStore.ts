import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AIConfig, AI_CONFIG_DEFAULT } from '../lib/constants';

interface AIState {
  config: AIConfig;
  setConfig: (config: Partial<AIConfig>) => void;
  resetConfig: () => void;
}

export const useAIStore = create<AIState>()(
  persist(
    (set) => ({
      config: AI_CONFIG_DEFAULT,
      setConfig: (newConfig) =>
        set((state) => ({
          config: { ...state.config, ...newConfig },
        })),
      resetConfig: () => set({ config: AI_CONFIG_DEFAULT }),
    }),
    {
      name: 'ai-config',
    }
  )
);
