# CubaCodex - Guía de Desarrollo Completa

## 📋 Índice

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Desarrollo](#desarrollo)
4. [Build para Producción](#build-para-producción)
5. [Arquitectura](#arquitectura)
6. [Configuración de IA](#configuración-de-ia)
7. [Troubleshooting](#troubleshooting)

---

## 📋 Requisitos

### Windows
- Windows 10 o superior (64-bit)
- Node.js v18+ (https://nodejs.org/)
- Rust toolchain (https://rustup.rs/)
- Visual Studio Build Tools o C++ Build Tools
- Git (opcional, para desarrollo)

### Linux (Ubuntu/Debian)
- Ubuntu 20.04+ o Debian 11+
- Node.js v18+:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```
- Rust toolchain:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
- Dependencias del sistema:
  ```bash
  sudo apt-get update
  sudo apt-get install -y libwebkit2gtk-4.0-dev build-essential wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
  ```

---

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/cubacodex.git
cd cubacodex
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Verificar instalación

```bash
# Verificar Node.js
node --version

# Verificar Rust
rustc --version
cargo --version
```

---

## 💻 Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run tauri:dev
```

Esto iniciará:
- Vite dev server en http://localhost:1420
- Ventana Tauri con hot reload

### Estructura de comandos

```bash
# Desarrollo
npm run dev                    # Solo Vite
npm run tauri:dev             # Tauri + Vite

# Build
npm run build                  # Build frontend
npm run tauri:build           # Build completo

# Preview
npm run preview                # Preview del build
```

---

## 📦 Build para Producción

### Windows

```bash
npm run tauri:build
```

Output en: `src-tauri/target/release/bundle/msi/`
- `cubacodex_1.0.0_x64_en-US.msi` - Instalador MSI
- `cubacodex.exe` - Ejecutable directo

### Linux

```bash
npm run tauri:build
```

Output en: `src-tauri/target/release/bundle/`
- `cubacodex_1.0.0_amd64.deb` - Paquete Debian
- `cubacodex_1.0.0_amd64.AppImage` - Portable

### Build para plataforma específica

```bash
# Windows x64
npm run tauri:build --target x86_64-pc-windows-msvc

# Linux x64
npm run tauri:build --target x86_64-unknown-linux-gnu
```

---

## 🏗️ Arquitectura

```
cubacodex/
├── src/                    # Frontend React/TypeScript
│   ├── ui/               # Componentes UI
│   │   ├── editor/       # Monaco Editor wrapper
│   │   ├── chat/         # Chat panel IA
│   │   ├── sidebar/      # File explorer
│   │   └── titlebar/     # Custom titlebar
│   ├── ai/               # Sistema IA modular
│   ├── core/             # Lógica de negocio
│   ├── stores/           # Estado global (Zustand)
│   ├── lib/              # Utilidades
│   └── types/            # TypeScript types
└── src-tauri/             # Backend Rust
    ├── src/
    │   ├── main.rs        # Entry point
    │   └── commands.rs    # Comandos Tauri
    ├── Cargo.toml
    └── tauri.conf.json   # Configuración
```

---

## 🤖 Configuración de IA

### Ollama (Local, Recomendado)

#### Instalación

**Windows:**
```bash
# Descargar desde https://ollama.ai/download
# O ejecutar via PowerShell:
iwr -useb get.ollama.ai | iex
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

#### Descargar modelo

```bash
# Modelo recomendado para código
ollama pull codellama

# Otros modelos disponibles
ollama pull llama2
ollama pull mistral
ollama pull deepseek-coder
```

#### Verificar instalación

```bash
# Verificar que Ollama está corriendo
curl http://localhost:11434/api/tags

# Prueba de generación
ollama run codellama "Escribe una función factorial en JavaScript"
```

### Google Gemini (Gratis)

#### Obtener API Key

1. Ir a https://aistudio.google.com/app/apikey
2. Crear nueva API key
3. Copiar la key

#### Configurar en CubaCodex

La API key se configura en la aplicación:
1. Abrir CubaCodex
2. Ir a Settings (o esperar implementación)
3. Seleccionar "Gemini" como proveedor
4. Pegar la API key

#### Verificar instalación

```bash
# Prueba de API (reemplazar YOUR_API_KEY)
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{"text": "Hola"}]
    }]
  }'
```

### DeepSeek Coder (Gratis)

#### Obtener API Key

1. Ir a https://platform.deepseek.com/
2. Crear cuenta
3. Generar API key

#### Configurar en CubaCodex

Similar a Gemini, seleccionar "DeepSeek" y pegar API key.

---

## 🔧 Troubleshooting

### Problema: `tauri:dev` no inicia

**Windows:**
```bash
# Reinstalar VSC Build Tools
# Descargar desde: https://aka.ms/vs/17/release/vs_BuildTools.exe
```

**Linux:**
```bash
# Instalar dependencias faltantes
sudo apt-get install -y libwebkit2gtk-4.0-dev build-essential wget libssl-dev libgtk-3-dev
```

### Problema: Monaco Editor no carga

```bash
# Limpiar caché de Vite
rm -rf node_modules/.vite
npm run dev
```

### Problema: Ollama no responde

```bash
# Verificar si Ollama está corriendo
curl http://localhost:11434/api/tags

# Reiniciar Ollama
# Windows: Services → Ollama → Restart
# Linux: sudo systemctl restart ollama
```

### Problema: API de Gemini falla

- Verificar que la API key es correcta
- Verificar que tienes cuota disponible (15 requests/day gratis)
- Revisar logs de la aplicación (F12 en desarrollo)

### Problema: Error de permisos en Linux

```bash
# Asegurar permisos de ejecución
chmod +x cubacodex_1.0.0_amd64.AppImage

# Ejecutar con FUSE si falla
sudo apt-get install fuse
./cubacodex_1.0.0_amd64.AppImage
```

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Tauri](https://tauri.app/v1/guides)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)

### Comunidad

- [Discord de Tauri](https://discord.com/tauri)
- [GitHub Discussions](https://github.com/usuario/cubacodex/discussions)

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Pull Request

---

## 📄 Licencia

Apache 2.0 - Ver [LICENSE](../LICENSE)
