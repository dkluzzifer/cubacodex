export function countTokens(text: string): number {
  return text.split(/\s+/).length;
}

export function estimateTokenCost(text: string, model: string): number {
  const tokens = countTokens(text);
  const costPer1kTokens = {
    'gemini-pro': 0.000001,
    'deepseek-coder': 0.0000014,
    'ollama': 0,
  };
  
  const rate = costPer1kTokens[model as keyof typeof costPer1kTokens] || 0.000001;
  return (tokens / 1000) * rate;
}
