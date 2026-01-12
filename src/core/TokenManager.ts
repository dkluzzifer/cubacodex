import { countTokens } from '../lib/token-counter';

export class TokenManager {
  private maxTokens: number;
  private currentTokens: number = 0;
  
  constructor(maxTokens: number = 2000) {
    this.maxTokens = maxTokens;
  }
  
  truncate(text: string): string {
    const tokens = countTokens(text);
    
    if (tokens <= this.maxTokens) {
      this.currentTokens = tokens;
      return text;
    }
    
    const words = text.split(/\s+/);
    const ratio = this.maxTokens / tokens;
    const targetWords = Math.floor(words.length * ratio);
    
    this.currentTokens = this.maxTokens;
    return words.slice(0, targetWords).join(' ');
  }
  
  getRemainingTokens(): number {
    return this.maxTokens - this.currentTokens;
  }
  
  getCurrentTokens(): number {
    return this.currentTokens;
  }
  
  updateMaxTokens(maxTokens: number): void {
    this.maxTokens = maxTokens;
  }
}

export const tokenManager = new TokenManager();
