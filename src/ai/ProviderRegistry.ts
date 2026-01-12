import { BaseAIProvider } from './BaseAIProvider';
import { OllamaAIProvider } from './OllamaAIProvider';
import { GeminiAIProvider } from './GeminiAIProvider';

export class ProviderRegistry {
  private providers: Map<string, BaseAIProvider>;
  
  constructor() {
    this.providers = new Map();
  }
  
  register(provider: BaseAIProvider): void {
    this.providers.set(provider.id, provider);
  }
  
  get(id: string): BaseAIProvider | undefined {
    return this.providers.get(id);
  }
  
  getAll(): BaseAIProvider[] {
    return Array.from(this.providers.values());
  }
  
  async getAvailableProviders(): Promise<BaseAIProvider[]> {
    const available: BaseAIProvider[] = [];
    
    for (const provider of this.providers.values()) {
      if (await provider.validateConfig()) {
        available.push(provider);
      }
    }
    
    return available;
  }
}

export const createRegistry = (): ProviderRegistry => {
  const registry = new ProviderRegistry();
  
  registry.register(new OllamaAIProvider());
  registry.register(new GeminiAIProvider(''));
  
  return registry;
};
