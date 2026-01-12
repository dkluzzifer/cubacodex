# 🦀 INSTALAR RUST - GUÍA COMPLETA

## ⚠️ ERROR DETECTADO

El error **"Rust no encontrado"** significa que tu Windows no tiene Rust instalado.

---

## 🎯 SOLUCIÓN RÁPIDA

### Opción A: Instalación Automática (Recomendada)

**Ejecuta:**
```powershell
.\install-rust.bat
```

Este script:
1. Descarga el instalador de Rust automáticamente
2. Ejecuta el instalador
3. Te guía paso a paso

### Opción B: Instalación Manual

#### Paso 1: Descargar Rustup

Ve a: **https://rustup.rs/**

Hacer clic en: **Download rustup-init.exe** (o ejecutar: `curl --proto '=https' --tlsv1.2 -sSf https://win.rustup.rs/x86_64`)

#### Paso 2: Ejecutar el Instalador

1. Ejecutar `rustup-init.exe`
2. Seguir las instrucciones en pantalla
3. **IMPORTANTE**: Cerrar la ventana del instalador

#### Paso 3: Verificar la Instalación

**Abre una NUEVA ventana** de PowerShell o CMD y ejecuta:

```bash
cargo --version
rustc --version
```

Si ves las versiones, Rust está instalado correctamente.

#### Paso 4: Continuar con el Build

```powershell
.\build-auto.bat
```

---

## 🔧 VERIFICACIÓN

### Comando de Verificación

```bash
# Verificar Cargo
cargo --version

# Verificar Rust Compiler
rustc --version
```

**Salida esperada:**
```
cargo 1.75.0 (o superior)
rustc 1.75.0 (o superior)
```

---

## 🚨 SI RUST SIGUE SIN FUNCIONAR

### Problema 1: Comandos no reconocidos

**Causa:** Las variables de entorno no se cargaron.

**Solución:**
1. Cierra TODAS las ventanas de PowerShell/CMD
2. Abre UNA NUEVA ventana
3. Intenta `cargo --version`

### Problema 2: Permisos Insuficientes

**Causa:** No tienes permisos para instalar.

**Solución:**
1. Ejecutar PowerShell como Administrador
2. Clic derecho → "Ejecutar como administrador"
3. Ejecutar el instalador

### Problema 3: Antivirus Bloquea

**Causa:** El antivirus bloquea la instalación.

**Solución:**
1. Desactivar temporalmente el antivirus
2. Ejecutar el instalador
3. Reactivar el antivirus
4. Agregar excepción para Rust

---

## 📦 INSTALACIÓN COMPLETA DE RUST

### Pasos Detallados:

1. **Descargar rustup-init.exe**:
   - URL: https://win.rustup.rs/x86_64
   - O: `curl --proto '=https' --tlsv1.2 -sSf https://win.rustup.rs/x86_64 -o rustup-init.exe`

2. **Ejecutar el instalador**:
   ```powershell
   rustup-init.exe
   ```

3. **Seleccionar opciones** (presionar Enter para defaults):
   - Default installation
   - Default host triple (x86_64-pc-windows-msvc)
   - Default toolchain (stable)
   - Default profile (default)

4. **Esperar la instalación**:
   - Descargará Rust
   - Descargará Cargo
   - Configurará las variables de entorno

5. **CERRAR la ventana** del instalador

6. **ABRIR UNA NUEVA ventana** de PowerShell

7. **Verificar**:
   ```bash
   cargo --version
   ```

---

## 🔄 DESINSTALAR Y REINSTALAR

Si ya instalaste Rust pero no funciona:

### Desinstalar:

1. Ir a: `C:\Users\<TuUsuario>\.cargo\`
2. Ejecutar: `uninstall.exe`
3. Borrar: `C:\Users\<TuUsuario>\.cargo\`
4. Borrar: `C:\Users\<TuUsuario>\.rustup\`

### Reinstalar:

Seguir los pasos de arriba.

---

## ✅ VERIFICACIÓN FINAL

Después de instalar Rust:

```bash
# 1. Verificar Cargo
cargo --version

# 2. Verificar RustC
rustc --version

# 3. Verificar en PATH
where cargo

# 4. Verificar rustup
rustup --version
```

**Si los 4 comandos funcionan, Rust está 100% instalado.**

---

## 🎯 CONTINUAR CON CUBACODEX

Una vez que Rust esté instalado:

```powershell
.\build-auto.bat
```

Este script:
1. Verifica que Rust está instalado
2. Verifica Node.js
3. Instala dependencias de Node
4. Genera iconos
5. Compila CubaCodex
6. Crea el ejecutable `.exe`

---

## 📞 AYUDA ADICIONAL

### Documentación de Rust:
- Instalación: https://www.rust-lang.org/tools/install
- Manual: https://doc.rust-lang.org/book/

### Foros de la comunidad:
- Rust Users Forum: https://users.rust-lang.org/
- Reddit r/rust: https://reddit.com/r/rust
- Discord: https://discord.gg/rust-lang

### Problemas específicos:
- Error al descargar → Usa un navegador para descargar
- Permiso denegado → Ejecutar como administrador
- Variables de entorno → Reiniciar el computador

---

## 🎯 RESUMEN RÁPIDO

```
1. Ejecuta: install-rust.bat
2. CIERRA la ventana del instalador
3. ABRE UNA NUEVA ventana de PowerShell
4. Ejecuta: cargo --version (para verificar)
5. Ejecuta: build-auto.bat (para compilar CubaCodex)
```

---

**¡Una vez instalado Rust, podrás generar el .exe sin problemas!** 🚀
