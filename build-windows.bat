@echo off
REM Script de build para Windows - Genera ejecutable .exe

echo ========================================
echo   CubaCodex - Build para Windows
echo ========================================
echo.

REM Verificar dependencias
where cargo >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Rust no encontrado.
    echo Por favor instálalo desde: https://rustup.rs/
    pause
    exit /b 1
)

where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js no encontrado.
    echo Por favor instálalo desde: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Dependencias verificadas
echo.

REM Instalar dependencias de Node si es necesario
if not exist "node_modules" (
    echo 📥 Instalando dependencias...
    call npm install
    echo.
)

REM Verificar iconos
if not exist "src-tauri\icons\icon.ico" (
    echo ⚠️  Icono icon.ico no encontrado.
    echo Generando iconos por defecto...
    copy "public\icon-512.png" "src-tauri\icons\icon.ico" >nul 2>nul
    echo.
)

REM Compilar para Windows
echo 🏗️  Compilando CubaCodex para Windows...
echo.

call npm run tauri:build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   ✅ Build completado exitosamente!
    echo ========================================
    echo.
    echo El ejecutable se encuentra en:
    echo   src-tauri\target\release\bundle\msi\
    echo.
    echo Archivos generados:
    dir /b "src-tauri\target\release\bundle\msi\" 2>nul
    echo.
    dir /b "src-tauri\target\release\"*.exe 2>nul
    echo.
) else (
    echo.
    echo ========================================
    echo   ❌ Build falló
    echo ========================================
    echo.
    echo Por favor revisa los errores arriba.
    pause
    exit /b 1
)

echo Para ejecutar la aplicación:
echo   src-tauri\target\release\cubacodex.exe
echo.

pause
