import { BaseAIProvider } from './BaseAIProvider';

export class GeminiAIProvider extends BaseAIProvider {
  readonly id = 'gemini';
  readonly name = 'Google Gemini (Free)';
  readonly type = 'cloud' as const;
  
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
  
  constructor(apiKey: string) {
    super();
    this.apiKey = apiKey;
  }
  
  async generateCode(prompt: string, context?: string): Promise<string> {
    const fullPrompt = this.buildPrompt(prompt, context);
    
    const response = await fetch(
      `${this.baseUrl}/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Error en la API de Gemini');
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
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
    return !!this.apiKey && this.apiKey.length > 0;
  }
}
