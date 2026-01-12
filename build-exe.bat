@echo off
REM Script de build rápido para Windows (Release optimizado)

set BUILD_MODE=release

echo 🚀 CubaCodex - Build Release
echo.

REM Configurar variables de entorno
set TAURI_BUNDLE=1

REM Compilar con optimizaciones
echo 🏗️  Compilando...
cargo tauri build --release

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completado!
    echo.
    
    REM Copiar ejecutable a ubicación fácil
    if exist "src-tauri\target\release\cubacodex.exe" (
        copy "src-tauri\target\release\cubacodex.exe" ".\cubacodex.exe"
        echo ✅ Ejecutable copiado a: .\cubacodex.exe
    )
    
    echo.
    echo 📦 Instalador MSI:
    dir /s /b "src-tauri\target\release\bundle\msi\*.msi" 2>nul
    echo.
    echo 🎯 Ejecutable:
    echo   .\cubacodex.exe
    echo.
) else (
    echo ❌ Build falló. Verifica los errores.
    pause
    exit /b 1
)

echo ¡Listo! Puedes ejecutar: .\cubacodex.exe
pause
