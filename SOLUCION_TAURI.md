# 🔧 SOLUCIÓN: COMANDO TAURI NO ENCONTRADO

## ⚠️ ERROR DETECTADO

```
error: no such command: `tauri`
```

**Causa:** La CLI de Tauri no está instalada globalmente.

---

## 🎯 SOLUCIÓN MÁS FÁCIL

### Ejecutar el script completo

```powershell
.\install-completo.bat
```

Este script:
- ✅ Verifica todas las dependencias
- ✅ Instala Tauri CLI si falta
- ✅ Instala dependencias de Node
- ✅ Genera iconos necesarios
- ✅ Te guía paso a paso

---

## 🔧 SOLUCIÓN MANUAL

### Paso 1: Instalar Tauri CLI

```bash
cargo install tauri-cli --version "^2.0"
```

### Paso 2: Verificar instalación

```bash
cargo-tauri --version
```

Deberías ver algo como: `tauri-cli 2.0.0` (o superior)

### Paso 3: Compilar con npx (alternativa)

```powershell
.\build-npx.bat
```

Este script usa `npx tauri` que no requiere instalación global.

---

## 🎯 MÉTODOS DISPONIBLES

### Método A: Instalación Global (Recomendado)

```bash
# Instalar Tauri CLI globalmente
cargo install tauri-cli --version "^2.0"

# Verificar
cargo-tauri --version

# Compilar
npm run tauri:build
```

### Método B: Usar npx (Más fácil)

```bash
# No requiere instalación global
.\build-npx.bat

# o manualmente
npx tauri build
```

### Método C: Instalación Completa Automática

```bash
.\install-completo.bat
```

Este script hace todo automáticamente.

---

## ✅ VERIFICACIÓN

### Verificar Tauri CLI

```bash
# Método 1: Instalación global
where cargo-tauri

# Método 2: Con npx (siempre funciona)
npx tauri --version
```

### Verificar que funcionen

```bash
# Listar comandos disponibles de Tauri
cargo-tauri --help

# o con npx
npx tauri --help
```

---

## 🚨 SI NO FUNCIONA NINGÚN MÉTODO

### Problema 1: Cargo no funciona

```bash
# Verificar cargo
cargo --version

# Si no funciona, reinstala Rust
.\install-rust.bat
```

### Problema 2: Permisos insuficientes

```bash
# Ejecutar PowerShell como Administrador
# Clic derecho → "Ejecutar como administrador"

# Luego ejecutar
cargo install tauri-cli --version "^2.0"
```

### Problema 3: Variables de entorno

```bash
# Cerrar TODAS las ventanas de PowerShell/CMD
# Abrir UNA NUEVA ventana
# Ejecutar nuevamente
cargo-tauri --version
```

### Problema 4: Cache de Cargo

```bash
# Limpiar caché de Cargo
cargo clean

# Intentar de nuevo
cargo install tauri-cli --version "^2.0"
```

---

## 📦 PAQUETES QUE SE INSTALAN

Cuando ejecutas `cargo install tauri-cli`, se instala:

1. **cargo-tauri** (ejecutable principal)
2. **tauri-cli** (librería de comandos)
3. **Dependencias de Rust** necesarias

**Ubicación de instalación:**
```
C:\Users\<TuUsuario>\.cargo\bin\cargo-tauri.exe
```

---

## 🎯 ESTRATEGIA RECOMENDADA

### Primera vez:

```bash
# 1. Ejecutar instalación completa
.\install-completo.bat

# 2. Seguir instrucciones del script

# 3. Compilar
.\build-npx.bat
```

### Usos futuros:

```bash
# Método A (con Tauri instalado globalmente)
npm run tauri:build

# Método B (con npx, siempre funciona)
npx tauri build
```

---

## 📞 AYUDA

### Documentación oficial de Tauri:
- Instalación: https://tauri.app/v1/guides/getting-started/prerequisites/
- CLI: https://tauri.app/v1/cli/

### Comandos útiles:

```bash
# Ver versión
cargo-tauri --version

# Ver ayuda
cargo-tauri --help

# Ver comandos disponibles
cargo-tauri help

# Iniciar modo desarrollo
cargo-tauri dev
# o
npx tauri dev

# Compilar
cargo-tauri build
# o
npx tauri build
```

---

## ✅ CHECKLIST FINAL

- [ ] Rust instalado y funcionando (`cargo --version`)
- [ ] Tauri CLI instalada (`cargo-tauri --version` o `npx tauri --version`)
- [ ] Node.js instalado (`node --version`)
- [ ] Dependencias de Node instaladas (`npm install`)
- [ ] Iconos generados (`src-tauri/icons/icon.ico` existe)
- [ ] Build ejecutado sin errores

---

## 🎯 RESUMEN RÁPIDO

```bash
# Opción A: Todo automático (recomendado)
.\install-completo.bat

# Opción B: Solo Tauri CLI
cargo install tauri-cli --version "^2.0"

# Opción C: Usar npx (siempre funciona)
.\build-npx.bat
```

---

**¡Elige el método que prefieras y compilará sin problemas!** 🚀
