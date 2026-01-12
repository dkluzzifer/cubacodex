# 🚀 CUBACODEX - GUÍA DE INICIO

## ⚡ COMENZAR AHORA (Método Más Fácil)

### Método 1: Instalación Completa Automática

```powershell
.\install-completo.bat
```

**Este script hace TODO:**
1. ✅ Instala Rust (si falta)
2. ✅ Instala Tauri CLI (si falta)
3. ✅ Instala dependencias de Node
4. ✅ Genera iconos
5. ✅ Te guía paso a paso

### Método 2: Compilar con npx (Siempre Funciona)

```powershell
.\build-npx.bat
```

**Ventajas:**
- ✅ No necesita instalar Tauri CLI globalmente
- ✅ Usa `npx tauri` que descarga automáticamente
- ✅ Funciona siempre que tengas npm

### Método 3: Instalar Tauri CLI Manualmente

```powershell
cargo install tauri-cli --version "^2.0"
```

Luego ejecutar:
```powershell
npm run tauri:build
```

---

## 📋 CÓMO ELEGIR EL MÉTODO

| Situación | Método Recomendado | Comando |
|-----------|---------------------|----------|
| **Primera vez** | Instalación Completa | `.\install-completo.bat` |
| **Ya tienes Rust/npm** | Compilar con npx | `.\build-npx.bat` |
| **Quieres Tauri global** | Instalar CLI | `cargo install tauri-cli --version "^2.0"` |
| **Build falló** | Ver guía de errores | `SOLUCION_TAURI.md` |

---

## ✅ MÉTODO RECOMENDADO PARA TI

**Ejecuta:**
```powershell
.\build-npx.bat
```

**¿Por qué?**
1. No necesita instalar nada extra
2. Usa npx (incluido con npm)
3. Funciona siempre que tengas Node.js
4. Si no tienes Node.js, el script te lo dirá

---

## 🎯 SI QUIERES INSTALAR TODO

**Ejecuta:**
```powershell
.\install-completo.bat
```

Este script:
- Verifica qué falta
- Instala lo necesario automáticamente
- Te guía paso a paso

---

## 📚 GUÍAS DISPONIBLES

| Archivo | Contenido |
|---------|-----------|
| **START.md** | Esta guía rápida |
| **SOLUCION_TAURI.md** | Solución al error de Tauri |
| **INSTALLAR_RUST.md** | Guía de instalación de Rust |
| **GENERAR_EXE.md** | Cómo crear el .exe |
| **QUICK_START.md** | Guía de usuario |

---

## 🎯 PREGUNTAS FRECUENTES

### "¿Qué debo hacer primero?"

**Respuesta:** Ejecuta `.\build-npx.bat`

### "¿Necesito instalar Rust?"

**Respuesta:** Sí, pero `build-npx.bat` usará `npx tauri` que funciona aunque Rust no esté instalado globalmente.

### "¿Qué es npx?"

**Respuesta:** `npx` es una herramienta de npm que ejecuta paquetes sin instalarlos globalmente. Como `cargo tauri` pero para Node.js.

### "¿Cuál método es el mejor?"

**Respuesta:** `build-npx.bat` porque:
- Siempre funciona (si tienes npm)
- No necesita configuración adicional
- Actualiza automáticamente Tauri CLI

---

## 🚀 INICIO EN 3 PASOS

### Paso 1: Ejecutar el build

```powershell
.\build-npx.bat
```

### Paso 2: Esperar la compilación

El build tomará varios minutos. Verás:
```
Compiling cubacodex...
Finished release [optimized] target(s) in XX mins
```

### Paso 3: Ejecutar el .exe

```powershell
.\cubacodex.exe
```

---

## ✅ VERIFICACIÓN

### Después del build, verificar:

- [ ] Archivo `.msi` existe en `src-tauri/target/release/bundle/msi/`
- [ ] Archivo `.exe` existe en `src-tauri/target/release/`
- [ ] Ejecutable copiado a raíz: `.cubacodex.exe`

### Si falta algo:

```powershell
# Limpiar y reintentar
cargo clean
npm cache clean --force
.\build-npx.bat
```

---

## 🎯 RESUMEN FINAL

```
RECOMENDADO: .\build-npx.bat
ALTERNATIVA: .\install-completo.bat
MANUAL:      cargo install tauri-cli --version "^2.0"
```

**Elegir UNO método y ejecutar.**

---

**¡Comienza ahora! Ejecuta: `.\build-npx.bat`** 🚀
