import { BaseAIProvider } from './BaseAIProvider';

export class OllamaAIProvider extends BaseAIProvider {
  readonly id = 'ollama';
  readonly name = 'Ollama (Local)';
  readonly type = 'local' as const;
  
  private baseUrl: string;
  private model: string;
  
  constructor(baseUrl: string = 'http://localhost:11434', model: string = 'codellama:latest') {
    super();
    this.baseUrl = baseUrl;
    this.model = model;
  }
  
  async generateCode(prompt: string, context?: string): Promise<string> {
    const fullPrompt = this.buildPrompt(prompt, context);
    
    const response = await fetch(`${this.baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: this.model,
        prompt: fullPrompt,
        stream: false,
        options: {
          temperature: 0.7,
        },
      }),
    });
    
    if (!response.ok) {
      throw new Error('Ollama no disponible. Asegúrate de que Ollama esté ejecutándose.');
    }
    
    const data = await response.json();
    return data.response;
  }
  
  async explainCode(code: string, language: string): Promise<string> {
    const prompt = `Explica este código en ${language}:\n\n${code}\n\nExplicación clara y concisa en español.`;
    return this.generateCode(prompt);
  }
  
  async fixError(code: string, error: string): Promise<string> {
    const prompt = `Corrige el siguiente código:\n\n${code}\n\nError:\n${error}\n\nProporciona el código corregido con explicación.`;
    return this.generateCode(prompt);
  }
  
  async validateConfig(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`);
      return response.ok;
    } catch {
      return false;
    }
  }
}
