# Changelog

All notable changes to CubaCodex will be documented in this file.

## [1.0.0] - 2025-01-11

### Added
- Editor Monaco integrado (mismo que VS Code)
- Sistema de archivos con explorador lateral
- Soporte para múltiples lenguajes (JS, TS, Python, PHP, HTML, CSS, SQL)
- Chat lateral con IA integrada
- Soporte para Ollama (local)
- Soporte para Google Gemini (gratis)
- Generación de código
- Explicación de código
- Corrección de errores
- Sistema de tabs para múltiples archivos
- Tema oscuro profesional
- Bajo consumo de recursos

### Features
- Editor con syntax highlighting
- Autocompletado básico
- Intellisense
- Minimap
- Resaltado de línea activa
- Scrollbars personalizadas

### Technical
- Tauri 2.0 + React 18
- TypeScript
- Zustand para estado global
- Monaco Editor
- Arquitectura modular de IA
- Fallback automático entre providers

### Known Issues
- Streaming en Ollama puede ser lento en hardware básico
- Gemini tiene límites de rate limiting en versión gratuita
