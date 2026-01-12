import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export function renderMarkdown(text: string): string {
  const html = marked(text, {
    breaks: true,
    gfm: true,
  });
  return DOMPurify.sanitize(html);
}

export function extractCodeBlocks(text: string): string[] {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks: string[] = [];
  let match;
  
  while ((match = codeBlockRegex.exec(text)) !== null) {
    blocks.push(match[2]);
  }
  
  return blocks;
}
