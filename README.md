# CubaCodex

IDE de código asistido por IA multiplataforma (Windows + Linux)

## 🚀 Características

- ✅ Editor profesional (Monaco - mismo que VS Code)
- ✅ Múltiples archivos con tabs
- ✅ Syntax highlighting: JS, TS, Python, PHP, HTML, CSS, SQL
- ✅ IA integrada con soporte para:
  - Ollama (local, gratis)
  - Google Gemini (gratis)
- ✅ Chat lateral con streaming
- ✅ Generación de código, explicaciones y corrección de errores
- ✅ Tema oscuro profesional
- ✅ Bajo consumo: ~50MB RAM

## 📋 Requisitos

- **Windows**: 10 o superior, 4GB RAM mínimo
- **Linux**: Ubuntu/Debian o derivados, 4GB RAM mínimo
- **Rust**: Instalar desde https://rustup.rs/
- **Node.js**: v18 o superior

## 🔧 Instalación

### Desde código fuente

```bash
git clone https://github.com/usuario/cubacodex.git
cd cubacodex
npm install
npm run tauri:build
```

### Desde instalador

**Windows**: Descargar `.msi` desde Releases y ejecutar
**Linux**: 
```bash
sudo dpkg -i cubacodex_1.0.0_amd64.deb
# o versión portable
chmod +x cubacodex_1.0.0_amd64.AppImage
./cubacodex_1.0.0_amd64.AppImage
```

## 🤖 Configuración de IA

### Ollama (Local)

1. Instalar Ollama: https://ollama.ai/
2. Descargar modelo: `ollama pull codellama`
3. CubaCodex detectará automáticamente

### Google Gemini (Gratis)

1. Crear cuenta en https://aistudio.google.com/
2. Obtener API Key gratis
3. Configurar en CubaCodex: Settings > AI > Gemini API Key

## 💻 Uso

1. Crear nuevo archivo o abrir proyecto existente
2. Escribir código en el editor
3. Usar el panel lateral de IA:
   - Pedir explicaciones: "Explica esta función"
   - Generar código: "Crea una función que..."
   - Corregir errores: "Corrige este bug"

## ⚠️ Limitaciones Conocidas

- Streaming en modelos locales puede ser lento en hardware básico
- Gemini tiene límite de requests en versión gratuita
- Solo soporta Windows 10+ y distribuciones Linux basadas en Debian

## 🎯 Próximas Mejas

- [ ] Autocompletado inline en el editor
- [ ] Refactorización automática
- [ ] Integración con Git
- [ ] Sistema de plantillas de código
- [ ] Soporte para macOS
- [ ] Extensiones personalizables

## 📄 Licencia

Apache 2.0 - Ver [LICENSE](LICENSE) para más detalles

## 🤝 Contribuir

¡Contribuciones bienvenidas!

## 🙏 Créditos

- Monaco Editor por Microsoft
- Tauri por el equipo de Tauri
- Modelos IA: Google Gemini, Ollama
