export interface File {
  id: string;
  name: string;
  path: string;
  content: string;
  language: string;
  isModified: boolean;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface AIRequest {
  prompt: string;
  context?: string;
  language?: string;
  model?: string;
}

export interface AIConfig {
  provider: 'ollama' | 'gemini' | 'deepseek';
  ollamaUrl: string;
  ollamaModel: string;
  geminiApiKey: string;
  deepseekApiKey: string;
  temperature: number;
  maxTokens: number;
}

export interface ProviderStatus {
  id: string;
  name: string;
  type: 'local' | 'cloud';
  isAvailable: boolean;
  isConfigured: boolean;
}
