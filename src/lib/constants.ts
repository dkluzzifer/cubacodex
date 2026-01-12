export const AI_CONFIG_DEFAULT: AIConfig = {
  provider: 'ollama',
  ollamaUrl: 'http://localhost:11434',
  ollamaModel: 'codellama:latest',
  geminiApiKey: '',
  deepseekApiKey: '',
  temperature: 0.7,
  maxTokens: 2048,
};

export const SUPPORTED_LANGUAGES = {
  'javascript': 'javascript',
  'typescript': 'typescript',
  'python': 'python',
  'php': 'php',
  'html': 'html',
  'css': 'css',
  'json': 'json',
  'sql': 'sql',
  'markdown': 'markdown',
  'yaml': 'yaml',
  'xml': 'xml',
  'bash': 'shell',
} as const;

export const LANGUAGE_EXTENSIONS: Record<string, string> = {
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

export { LANGUAGE_EXTENSIONS };

export const DEFAULT_FILE_CONTENT: Record<string, string> = {
  javascript: `// Archivo JavaScript
console.log('Hola desde CubaCodex!');

function greet(name) {
  return \`¡Hola, \${name}!\`;
}

console.log(greet('Mundo'));
`,
  typescript: `// Archivo TypeScript
interface User {
  name: string;
  email: string;
}

function greet(user: User): string {
  return \`¡Hola, \${user.name}!\`;
}

const user: User = {
  name: 'Mundo',
  email: 'mundo@ejemplo.com'
};

console.log(greet(user));
`,
  python: `# Archivo Python
def saludar(nombre):
    return f"¡Hola, {nombre}!"

if __name__ == "__main__":
    print(saludar("Mundo"))
`,
  php: `<?php
// Archivo PHP
function saludar($nombre) {
    return "¡Hola, $nombre!";
}

echo saludar("Mundo");
?>`,
  html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página</title>
</head>
<body>
    <h1>¡Hola, Mundo!</h1>
</body>
</html>`,
  css: `/* Archivo CSS */
body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #1e1e1e;
    color: #d4d4d4;
}

h1 {
    color: #61afef;
}
`,
  markdown: `# Mi Documento

Este es un documento de ejemplo.

## Características

- Sintaxis de Markdown
- Soporte para código
- Listas y enlaces

\`\`\`javascript
console.log('Hola desde CubaCodex!');
\`\`\`
`,
  plaintext: `# Nuevo Archivo

Comienza a escribir aquí...`,
};
