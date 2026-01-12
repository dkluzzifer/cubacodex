export function getExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) return '';
  return filename.slice(lastDotIndex).toLowerCase();
}

export function getLanguageFromPath(filepath: string): string {
  const ext = getExtension(filepath);
  import { LANGUAGE_EXTENSIONS } from './constants';
  return LANGUAGE_EXTENSIONS[ext] || 'plaintext';
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function truncateTokens(text: string, maxTokens: number): string {
  const tokens = text.split(/\s+/);
  if (tokens.length <= maxTokens) return text;
  return tokens.slice(0, maxTokens).join(' ');
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
}
