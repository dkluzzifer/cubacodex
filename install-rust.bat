@echo off
REM Script de instalacion de Rust para Windows

echo ========================================
echo   Instalando Rust en Windows
echo ========================================
echo.

REM Verificar si Rust ya esta instalado
where cargo >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Rust ya esta instalado:
    cargo --version
    echo.
    echo RustC:
    rustc --version
    echo.
    echo Si no funciona, intenta reinstalar.
    pause
    exit /b 0
)

echo Rust no esta instalado. Iniciando instalacion...
echo.
echo Descargando rustup-init...
curl --proto '=https' --tlsv1.2 -sSf https://win.rustup.rs/x86_64 -o rustup-init.exe

if not exist "rustup-init.exe" (
    echo [X] Error al descargar rustup-init.exe
    echo.
    echo Intenta descargar manualmente desde:
    echo https://rustup.rs/
    pause
    exit /b 1
)

echo [OK] Descarga completada
echo.
echo Ejecutando instalador de Rust...
echo.
echo Sigue las instrucciones en pantalla.
echo.

rustup-init.exe

echo.
echo ========================================
echo   Instalacion de Rust
echo ========================================
echo.
echo Importante: Despues de la instalacion:
echo 1. Cierra esta ventana
echo 2. Abre una NUEVA ventana de PowerShell o CMD
echo 3. Ejecuta: cargo --version
echo 4. Si funciona, continua con: .\build-npx.bat
echo.

pause
