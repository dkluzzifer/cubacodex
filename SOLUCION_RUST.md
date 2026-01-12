# 🚀 CUBACODEX - GUIA RÁPIDA PARA COMENZAR

## ⚠️ ERROR: RUST NO ENCONTRADO

Tu Windows no tiene Rust instalado. **NECESITAS instalarlo para compilar CubaCodex**.

---

## 🎯 SOLUCIÓN EN 2 PASOS

### PASO 1: Instalar Rust

**Ejecuta este archivo:**
```powershell
.\install-rust.bat
```

**O manualmente:**
1. Ve a: https://rustup.rs/
2. Descarga `rustup-init.exe`
3. Ejecútalo
4. **CIERRA** la ventana del instalador
5. **ABRE** una NUEVA ventana

### PASO 2: Compilar CubaCodex

**En la NUEVA ventana, ejecuta:**
```powershell
.\build-auto.bat
```

Este script verifica que Rust esté instalado y compila automáticamente.

---

## ✅ VERIFICACIÓN

Después de instalar Rust, en una NUEVA ventana:

```bash
cargo --version
```

Deberías ver algo como: `cargo 1.75.0`

**Si funciona, continúa con el build.**

---

## 🎯 SI QUIERES EVITAR INSTALAR RUST

**Lo siento, NO es posible.** Rust es **ESPECIAL** para Tauri porque:

1. Tauri usa Rust para el backend nativo
2. Rust proporciona el acceso al sistema de Windows
3. Sin Rust, Tauri no puede crear el `.exe`

**Alternativas:**
- Espera a que alguien cree un `.exe` precompilado para compartir
- Contribuye al proyecto para crear builds automáticos en GitHub Actions

---

## 📦 REQUISITOS COMPLETOS

Para compilar CubaCodex en Windows necesitas:

| Componente | Versión Mínima | ¿Cómo Instalar? |
|-----------|-----------------|------------------|
| **Rust** | 1.70+ | `.\install-rust.bat` |
| **Node.js** | 18+ | https://nodejs.org/ |
| **VS Build Tools** | 2019+ | https://aka.ms/vs/17/release/vs_BuildTools.exe |
| **Git** (opcional) | 2.30+ | https://git-scm.com/ |

---

## 🔧 SI RUST YA ESTÁ INSTALADO PERO NO FUNCIONA

### Opción A: Reinstalar

```powershell
# Desinstalar
C:\Users\TuUsuario\.cargo\uninstall.exe

# Borrar carpetas
rmdir /s /q C:\Users\TuUsuario\.cargo
rmdir /s /q C:\Users\TuUsuario\.rustup

# Reinstalar
.\install-rust.bat
```

### Opción B: Agregar a PATH manualmente

1. Busca: `C:\Users\TuUsuario\.cargo\bin`
2. Agrega esa ruta a:
   - Configuración del sistema → Variables de entorno
   - Variable PATH
   - Reiniciar el computador

### Opción C: Usar una terminal diferente

Si PowerShell no funciona, prueba:
- CMD (Command Prompt)
- Windows Terminal (Win + X)
- Git Bash (si instalaste Git)

---

## 📞 AYUDA

Si no puedes instalar Rust:

1. **Lee la guía completa:** `docs/INSTALLAR_RUST.md`
2. **Foro de Rust:** https://users.rust-lang.org/
3. **Discord de Rust:** https://discord.gg/rust-lang
4. **Issues de CubaCodex:** GitHub Issues

---

## 🎯 QUÉ HACER DESPUÉS DE INSTALAR RUST

Una vez que Rust funcione:

```powershell
# 1. Verificar instalación
cargo --version

# 2. Compilar CubaCodex
.\build-auto.bat

# 3. Ejecutar el .exe
.\cubacodex.exe
```

---

## 💡 NOTA IMPORTANTE

**Rust se instala en:**
```
C:\Users\<TuUsuario>\.cargo\bin\  (ejecutables)
C:\Users\<TuUsuario>\.rustup\  (instalador)
```

**Cargo es el gestor de paquetes de Rust** (como npm para Node.js)

---

## 🚨 ERRORES COMUNES

| Error | Causa | Solución |
|-------|--------|-----------|
| "cargo not found" | PATH no configurado | Cerrar y abrir NUEVA terminal |
| "rustup not found" | No se instaló | Ejecuta `install-rust.bat` |
| "Access Denied" | Permisos insuficientes | Ejecutar como administrador |
| "Network Error" | No hay internet | Descargar manualmente del navegador |

---

## 📦 PAQUETES QUE RUST INSTALARÁ

- `rustc` (compilador de Rust)
- `cargo` (gestor de paquetes)
- `rust-std` (librería estándar)
- `rustup` (instalador/actualizador)

---

## 🎯 RESUMEN

```
1. Ejecuta: install-rust.bat
2. CIERRA la ventana del instalador
3. ABRE UNA NUEVA ventana
4. Ejecuta: cargo --version (verificar)
5. Ejecuta: build-auto.bat (compilar)
6. Ejecuta: cubacodex.exe (usar)
```

---

**¡Una vez instalado Rust, todo funcionará!** 🚀

No puedes evitar instalar Rust si quieres compilar el `.exe` localmente.
