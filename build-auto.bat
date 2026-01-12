@echo off
REM Script de build con auto-instalación de dependencias

echo ========================================
echo   CubaCodex - Build Inteligente
echo ========================================
echo.

REM Variables
set PROJECT_DIR=%~dp0
set NEED_RUST=0
set NEED_NODE=0
set NEED_VSTOOLS=0

echo 📋 Verificando dependencias...
echo.

REM 1. Verificar Rust
echo 1. Verificando Rust...
where cargo >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Rust NO encontrado
    echo.
    echo Puedes:
    echo   A) Instalar ahora automáticamente
    echo   B) Leer instrucciones y cancelar
    
    choice /c AB /n /m "Selecciona opción: "
    
    if %ERRORLEVEL% EQU 1 (
        echo.
        echo Instalando Rust...
        call install-rust.bat
        echo.
        echo ⚠️  IMPORTANTE: CIERRA esta ventana y ABRE UNA NUEVA para continuar
        pause
        exit /b 1
    ) else (
        echo.
        echo Instala Rust manualmente desde: https://rustup.rs/
        echo Luego ejecuta: .\build-exe.bat
        pause
        exit /b 1
    )
) else (
    echo ✅ Rust encontrado: 
    cargo --version
    set NEED_RUST=0
)

REM 2. Verificar Node.js
echo.
echo 2. Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js NO encontrado
    set NEED_NODE=1
) else (
    echo ✅ Node.js encontrado: 
    node --version
    set NEED_NODE=0
)

REM 3. Verificar dependencias de Node
if not exist "node_modules" (
    echo ❌ Dependencias de Node no instaladas
    set NEED_DEPS=1
) else (
    echo ✅ Dependencias de Node instaladas
    set NEED_DEPS=0
)

echo.
echo ========================================
echo   Resumen de Dependencias
echo ========================================
echo.
echo Rust:            %NEED_RUST% (0=OK, 1=FALTA)
echo Node.js:         %NEED_NODE% (0=OK, 1=FALTA)
echo Dependencias:     %NEED_DEPS% (0=OK, 1=FALTA)
echo.

REM Si falta algo, instalar
if %NEED_RUST% EQU 1 (
    echo.
    echo ❌ Necesitas instalar Rust primero.
    echo Ejecuta: install-rust.bat
    echo.
    pause
    exit /b 1
)

if %NEED_NODE% EQU 1 (
    echo.
    echo ❌ Necesitas instalar Node.js.
    echo Descargar desde: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

if %NEED_DEPS% EQU 1 (
    echo.
    echo 📥 Instalando dependencias de Node...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
)

REM 4. Generar iconos si faltan
if not exist "src-tauri\icons\icon.ico" (
    echo.
    echo 🎨 Generando iconos...
    call scripts\setup-icons.bat
)

REM 5. Compilar
echo.
echo ========================================
echo   Compilando CubaCodex
echo ========================================
echo.

call npm run tauri:build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ BUILD EXITOSO
    echo ========================================
    echo.
    echo El ejecutable se encuentra en:
    echo   src-tauri\target\release\bundle\msi\
    echo.
    echo O directamente:
    echo   src-tauri\target\release\cubacodex.exe
    echo.
    
    REM Intentar copiar a raíz
    if exist "src-tauri\target\release\cubacodex.exe" (
        copy "src-tauri\target\release\cubacodex.exe" ".\cubacodex.exe" >nul
        echo ✅ Ejecutable copiado a: .\cubacodex.exe
        echo.
    )
    
    echo 🚀 Para ejecutar: .\cubacodex.exe
    echo.
) else (
    echo.
    echo ========================================
    echo   ❌ BUILD FALLÓ
    echo ========================================
    echo.
    echo Revisa los errores arriba.
    echo Posibles causas:
    echo   1. Rust no está instalado correctamente
    echo   2. Faltan Visual Studio Build Tools
    echo   3. Error en el código
    echo.
    echo Soluciones:
    echo   1. Ejecuta: install-rust.bat
    echo   2. Instala Visual Studio Build Tools:
    echo      https://aka.ms/vs/17/release/vs_BuildTools.exe
    echo   3. Limpia y reintenta:
    echo      cargo clean ^&^& npm install ^&^& npm run tauri:build
    echo.
)

pause
