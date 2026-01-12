import { invoke } from '@tauri-apps/api/core';
import { File } from '../types';
import { generateId, LANGUAGE_EXTENSIONS, DEFAULT_FILE_CONTENT } from '../lib/constants';
import { getLanguageFromPath } from '../lib/language-utils';

export class FileManager {
  async readFile(path: string): Promise<string> {
    return await invoke('read_file', { path });
  }
  
  async writeFile(path: string, content: string): Promise<void> {
    await invoke('write_file', { path, content });
  }
  
  async readDirectory(path: string): Promise<File[]> {
    return await invoke('read_directory', { path });
  }
  
  async openFileSelector(): Promise<string | null> {
    const selected = await invoke('open_file_dialog');
    return selected as string | null;
  }
  
  async saveFileSelector(defaultPath?: string): Promise<string | null> {
    const saved = await invoke('save_file_dialog', { defaultPath });
    return saved as string | null;
  }
  
  createNewFile(filename: string, path: string = ''): File {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    const language = LANGUAGE_EXTENSIONS[`.${ext}`] || 'plaintext';
    const defaultContent = DEFAULT_FILE_CONTENT[language as keyof typeof DEFAULT_FILE_CONTENT] || '';
    
    return {
      id: generateId(),
      name: filename,
      path: path || `/${filename}`,
      content: defaultContent,
      language,
      isModified: false,
    };
  }
}

export const fileManager = new FileManager();
