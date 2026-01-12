export abstract class BaseAIProvider {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract readonly type: 'local' | 'cloud';
  
  abstract generateCode(prompt: string, context?: string): Promise<string>;
  abstract explainCode(code: string, language: string): Promise<string>;
  abstract fixError(code: string, error: string): Promise<string>;
  abstract validateConfig(): Promise<boolean>;
  
  protected buildPrompt(prompt: string, context?: string): string {
    if (context) {
      return `Context:
${context}

Request:
${prompt}`;
    }
    return prompt;
  }
}
