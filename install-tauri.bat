@echo off
REM Script para instalar Tauri CLI globalmente

echo ========================================
echo   Instalando Tauri CLI
echo ========================================
echo.

REM Verificar si tauri ya está instalado
where cargo-tauri >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Tauri CLI ya está instalado:
    cargo-tauri --version
    echo.
    echo Ya puedes ejecutar: .\build-auto.bat
    pause
    exit /b 0
)

echo Tauri CLI no encontrado. Instalando...
echo.

REM Instalar Tauri CLI usando cargo
echo Ejecutando: cargo install tauri-cli --version "^2.0"
echo.

cargo install tauri-cli --version "^2.0"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ========================================
    echo   ❌ Instalación falló
    echo ========================================
    echo.
    echo Posibles causas:
    echo   1. Rust no está instalado o no funciona
    echo   2. Problemas de red
    echo   3. Permisos insuficientes
    echo.
    echo Soluciones:
    echo   1. Ejecuta: .\install-rust.bat
    echo   2. Verifica que Rust funciona: cargo --version
    echo   3. Ejecuta como administrador
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ Instalación completada
echo ========================================
echo.

REM Verificar la instalación
where cargo-tauri >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Tauri CLI instalado exitosamente:
    cargo-tauri --version
    echo.
    echo Ahora puedes ejecutar: .\build-auto.bat
) else (
    echo ⚠️  Tauri se instaló pero no está en PATH
    echo.
    echo Posibles soluciones:
    echo   1. CIERRA esta ventana
    echo   2. ABRE una NUEVA ventana de PowerShell/CMD
    echo   3. Ejecuta: .\build-auto.bat
)

echo.
pause
