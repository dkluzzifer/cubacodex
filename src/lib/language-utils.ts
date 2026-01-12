export function getLanguageFromPath(filepath: string): string {
  const lastDotIndex = filepath.lastIndexOf('.');
  if (lastDotIndex === -1) return 'plaintext';
  
  const ext = filepath.slice(lastDotIndex).toLowerCase();
  const LANGUAGE_EXTENSIONS: Record<string, string> = {
    '.js': 'javascript',
    '.jsx': 'javascript',
    '.ts': 'typescript',
    '.tsx': 'typescript',
    '.py': 'python',
    '.php': 'php',
    '.html': 'html',
    '.htm': 'html',
    '.css': 'css',
    '.json': 'json',
    '.sql': 'sql',
    '.md': 'markdown',
    '.yaml': 'yaml',
    '.yml': 'yaml',
    '.xml': 'xml',
    '.sh': 'shell',
    '.bash': 'shell',
  };
  
  return LANGUAGE_EXTENSIONS[ext] || 'plaintext';
}
