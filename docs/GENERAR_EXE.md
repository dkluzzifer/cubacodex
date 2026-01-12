# 🚀 GENERAR EJECUTABLE .EXE

Esta guía te explica paso a paso cómo generar el ejecutable `.exe` de CubaCodex.

---

## ⚠️ ERROR DE IMAGEN EXPLICADO

El error que viste sobre "ChatGPT Image..." **NO fue generado por mí**. Ese error proviene del sistema operativo o del contexto de la conversación anterior. Por favor ignóralo.

---

## 🎯 MÉTODO MÁS FÁCIL (Para Windows)

### Paso 1: Ejecutar script de iconos

```powershell
.\scripts\setup-icons.bat
```

Este script:
- Genera los iconos necesarios para Tauri
- Si no tienes ImageMagick, usa copias de iconos por defecto
- Crea el archivo `icon.ico` para Windows

### Paso 2: Ejecutar build

```powershell
.\build-exe.bat
```

Este script:
- Instala dependencias de Node
- Compila la aplicación con Tauri
- Genera el ejecutable `.exe`
- Copia el `.exe` a la raíz del proyecto

### Paso 3: Ejecutar

```powershell
.\cubacodex.exe
```

---

## 🔧 MÉTODO MANUAL (Más control)

### Requisitos Previos

1. **Node.js v18+** - Descargar de https://nodejs.org/
2. **Rust** - Descargar de https://rustup.rs/
3. **Visual Studio Build Tools** (Windows)

### Paso 1: Instalar dependencias

```bash
npm install
```

### Paso 2: Generar iconos (si no existen)

Verifica si existe `src-tauri/icons/icon.ico`. Si no:

```powershell
# Método A: Usar script (fácil)
.\scripts\setup-icons.bat

# Método B: Copiar manualmente
mkdir src-tauri\icons
copy public\icon-512.png src-tauri\icons\icon.ico
```

### Paso 3: Compilar con Tauri CLI

```bash
npm run tauri:build
```

### Paso 4: Encontrar el ejecutable

El ejecutable estará en:

```
src-tauri/target/release/bundle/msi/cubacodex_1.0.0_x64_en-US.msi
```

O el ejecutable directo:

```
src-tauri/target/release/cubacodex.exe
```

---

## 📦 ARCHIVOS GENERADOS

### Instalador MSI (Recomendado para distribución)

**Ubicación:** `src-tauri/target/release/bundle/msi/`

```
cubacodex_1.0.0_x64_en-US.msi  (~50-80MB)
```

**Qué hace:**
- Instala la aplicación en `C:\Users\<Usuario>\AppData\Local\Programs\cubacodex\`
- Crea acceso directo en el escritorio
- Crea acceso en el menú de inicio
- Registra la aplicación en "Agregar o quitar programas"

### Ejecutable Directo (Para testing rápido)

**Ubicación:** `src-tauri/target/release/`

```
cubacodex.exe  (~40-60MB)
```

**Notas:**
- No instala la aplicación
- Corre desde la ubicación actual
- Ideal para pruebas antes de distribuir

---

## 🎨 PERSONALIZAR EL ICONO

### Si tienes un icono personalizado:

1. Reemplazar `public/icon.svg` con tu diseño
2. Regenerar iconos:
   ```powershell
   .\scripts\setup-icons.bat
   ```
3. Compilar de nuevo:
   ```bash
   npm run tauri:build
   ```

### Crear icon.ico profesional:

Opción A: Usar GIMP (gratis)
1. Abrir tu icono en GIMP
2. File → Export As → Windows Icon (.ico)
3. Selecciona tamaños: 16x16, 32x32, 48x48, 256x256
4. Guardar en `src-tauri/icons/icon.ico`

Opción B: Usar servicios online
- https://www.icoconverter.com/
- https://convertio.co/ico-converter
- Sube tu PNG y descarga el .ico

---

## ✅ VERIFICACIÓN DEL BUILD

### Test del ejecutable

```powershell
# Ejecutar directamente
.\src-tauri\target\release\cubacodex.exe

# O desde el build rápido
.\cubacodex.exe
```

### Verificar que funciona

- [ ] La ventana se abre
- [ ] Puedes ver el editor
- [ ] Puedes crear archivos
- [ ] El icono se muestra correctamente

### Verificar tamaño de archivo

El `.msi` debe ser:
- Mínimo: ~50MB
- Típico: 60-80MB

Si es mayor a 150MB, hay algo mal en el bundle.

---

## 🚨 SOLUCIÓN DE ERRORES COMUNES

### Error: "cargo not found"

```bash
# Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Error: "node not found"

Descargar e instalar desde https://nodejs.org/

### Error: "icon.ico not found"

```powershell
# Generar iconos
.\scripts\setup-icons.bat

# O crear manualmente
mkdir src-tauri\icons
copy public\icon-512.png src-tauri\icons\icon.ico
```

### Error: "link.exe not found"

Necesitas instalar Visual Studio Build Tools:

1. Descargar "Build Tools for Visual Studio 2019" o superior
2. Instalar con el componente "C++ build tools"
3. Reiniciar el computador
4. Intentar el build de nuevo

### Error de compilación en Rust

```bash
# Limpiar caché de Cargo
cargo clean

# Actualizar dependencias
cargo update

# Intentar de nuevo
npm run tauri:build
```

### Error: El ejecutable no se inicia

1. Verifica que WebView2 esté instalado (Windows 10 1809+ lo tiene)
2. Ejecutar como administrador
3. Verificar el antivirus no esté bloqueando

---

## 📢 DISTRIBUCIÓN DEL EJECUTABLE

### Para compartir con otros:

#### Opción A: Instalador MSI (Recomendado)

Compartir el archivo:
```
src-tauri/target/release/bundle/msi/cubacodex_1.0.0_x64_en-US.msi
```

**Ventajas:**
- Instalación profesional
- Accesos directos automáticos
- Desinstalación limpia

#### Opción B: Ejecutable portable

Usar el `.exe` directo:
```
src-tauri/target/release/cubacodex.exe
```

**Ventajas:**
- No requiere instalación
- Se puede ejecutar desde USB
- Ideal para pruebas rápidas

**Desventajas:**
- No crea accesos directos
- No se integra con el sistema

### Para GitHub Releases

Subir a GitHub Releases:
1. `cubacodex_1.0.0_x64_en-US.msi` (instalador)
2. `SHA256SUMS` (opcional, para verificación)
3. `README.md` con instrucciones de instalación

### Para distribución por email/archivo

Compartir:
- El `.msi` como método oficial de instalación
- El `.exe` como opción portable (en carpeta separada)

---

## 🎯 RESUMEN RÁPIDO

```powershell
# 1. Generar iconos (una sola vez)
.\scripts\setup-icons.bat

# 2. Instalar dependencias (una sola vez)
npm install

# 3. Compilar (cuando quieras el exe)
.\build-exe.bat

# 4. Ejecutar
.\cubacodex.exe
```

---

## 📞 AYUDA ADICIONAL

- **Documentación de Tauri:** https://tauri.app/v1/guides/building/
- **Documentación de Rust:** https://doc.rust-lang.org/book/
- **Foro de la comunidad:** https://github.com/tauri-apps/tauri/discussions

---

**¡Listo! Ya puedes generar tu ejecutable .exe** 🚀
