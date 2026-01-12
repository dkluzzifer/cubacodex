# Generar Ejecutable .exe

Esta guía explica cómo generar el ejecutable `.exe` de CubaCodex para Windows.

## 🚀 Método Rápido (Recomendado)

### 1. Ejecutar script de build

```powershell
build-exe.bat
```

Esto generará:
- `cubacodex.exe` - Ejecutable directo
- Instalador MSI en `src-tauri/target/release/bundle/msi/`

### 2. Ejecutar la aplicación

Doble clic en `cubacodex.exe` o usar el instalador `.msi`.

---

## 🔧 Método Manual

### Paso 1: Instalar dependencias

```bash
npm install
```

### Paso 2: Verificar iconos

Asegúrate de tener los iconos necesarios:
- `src-tauri/icons/icon.ico` (para Windows)
- `src-tauri/icons/32x32.png`
- `src-tauri/icons/128x128.png`
- `src-tauri/icons/256x256.png`

Si no existen, puedes copiar iconos por defecto:
```bash
copy public\icon-512.png src-tauri\icons\icon.ico
```

### Paso 3: Compilar

```bash
npm run tauri:build
```

### Paso 4: Encontrar el ejecutable

El ejecutable estará en:
```
src-tauri/target/release/bundle/msi/cubacodex_1.0.0_x64_en-US.msi
```

O directamente:
```
src-tauri/target/release/cubacodex.exe
```

---

## 🎨 Generar Iconos (Opcional)

Si quieres crear iconos personalizados:

### Windows (PowerShell)

```powershell
# Instalar ImageMagick desde:
# https://imagemagick.org/script/download.php

.\scripts\generate-icons.bat
```

### Linux

```bash
# Instalar ImageMagick:
sudo apt-get install imagemagick

chmod +x scripts/generate-icons.sh
./scripts/generate-icons.sh
```

---

## 📦 Output del Build

Después de compilar, encontrarás:

### Instalador MSI (recomendado para distribución)
```
src-tauri/target/release/bundle/msi/
└── cubacodex_1.0.0_x64_en-US.msi
```

### Ejecutable directo (para testing)
```
src-tauri/target/release/
└── cubacodex.exe
```

### Portable (opcional, requiere configuración adicional)
```
src-tauri/target/release/bundle/nsis/
└── cubacodex_1.0.0_x64-setup.exe
```

---

## 🚨 Solución de Problemas

### Error: "cargo no encontrado"
Instala Rust desde https://rustup.rs/:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Error: "node no encontrado"
Instala Node.js desde https://nodejs.org/

### Error: "icon.ico no encontrado"
Copia un icono:
```bash
mkdir src-tauri\icons
copy public\icon-512.png src-tauri\icons\icon.ico
```

### Error de compilación
Actualiza dependencias:
```bash
npm install --legacy-peer-deps
cargo update
```

---

## ✅ Verificar Build

### Test local:
```bash
.\cubacodex.exe
```

### Test instalador:
```bash
.\src-tauri\target\release\bundle\msi\cubacodex_1.0.0_x64_en-US.msi
```

### Verificar tamaño:
El `.msi` debería ser ~50-80MB (incluyendo WebView2)
El `.exe` directo debería ser ~40-60MB

---

## 📢 Distribución

### Para compartir:
1. Usa el instalador `.msi` para distribución pública
2. Usa el `.exe` directo para testing interno
3. Considera firmar digitalmente el ejecutable (Windows SmartScreen)

### Para GitHub Releases:
Sube:
- `cubacodex_1.0.0_x64_en-US.msi`
- `cubacodex.exe` (opcional)
- `SHA256SUMS` (opcional, para verificación)

---

## 🎯 Notas Importantes

- El build requiere Windows 10+ o Windows Server 2016+
- WebView2 se instala automáticamente si no está presente
- El instalador requiere privilegios de administrador
- El instalador registra la aplicación en "Agregar o quitar programas"
