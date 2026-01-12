import { ProviderRegistry, createRegistry } from './ProviderRegistry';
import { useAIStore } from '../stores/aiStore';
import { AIRequest } from '../types';

export class AIOrchestrator {
  private registry: ProviderRegistry;
  private priority: string[] = ['ollama', 'gemini', 'deepseek'];
  
  constructor() {
    this.registry = createRegistry();
  }
  
  async execute(request: AIRequest): Promise<string> {
    const availableProviders = await this.registry.getAvailableProviders();
    
    if (availableProviders.length === 0) {
      throw new Error(
        'No hay proveedores de IA disponibles. ' +
        'Configura Ollama local o agrega una API Key de Gemini.'
      );
    }
    
    for (const providerId of this.priority) {
      const provider = this.registry.get(providerId);
      
      if (provider && availableProviders.includes(provider)) {
        try {
          const config = useAIStore.getState().config;
          
          if (provider.id === 'ollama') {
            (provider as any).baseUrl = config.ollamaUrl;
            (provider as any).model = config.ollamaModel;
          }
          
          if (provider.id === 'gemini') {
            (provider as any).apiKey = config.geminiApiKey;
          }
          
          return await provider.generateCode(request.prompt, request.context);
        } catch (error) {
          console.error(`Error con ${provider.name}:`, error);
          continue;
        }
      }
    }
    
    throw new Error('Todos los proveedores de IA fallaron');
  }
  
  async explainCode(code: string, language: string): Promise<string> {
    const providers = await this.registry.getAvailableProviders();
    
    if (providers.length === 0) {
      throw new Error('No hay proveedores de IA disponibles');
    }
    
    return providers[0].explainCode(code, language);
  }
  
  async fixError(code: string, error: string): Promise<string> {
    const providers = await this.registry.getAvailableProviders();
    
    if (providers.length === 0) {
      throw new Error('No hay proveedores de IA disponibles');
    }
    
    return providers[0].fixError(code, error);
  }
}

export const orchestrator = new AIOrchestrator();
