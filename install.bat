@echo off
REM Script de instalación para CubaCodex - Windows

echo 🚀 Instalando CubaCodex...
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Node.js encontrado:
    node --version
) else (
    echo ❌ Node.js no está instalado.
    echo 📥 Por favor instálalo desde: https://nodejs.org/
    pause
    exit /b 1
)

REM Verificar Rust
where cargo >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Rust encontrado:
    cargo --version
) else (
    echo ❌ Rust no está instalado. Instalando...
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
)

REM Clonar o configurar
if "%1"=="" set MODE=dev
if "%1"=="--dev" set MODE=dev
if "%1"=="--build" set MODE=build

if "%MODE%"=="dev" (
    echo 🔨 Configurando entorno de desarrollo...
    
    if not exist "cubacodex" (
        echo 📥 Clonando repositorio...
        git clone https://github.com/usuario/cubacodex.git
    )
    
    cd cubacodex
    
    echo 📥 Instalando dependencias de Node...
    call npm install
    
    echo ✅ Entorno de desarrollo configurado correctamente
    echo.
    echo Para iniciar el desarrollo:
    echo   cd cubacodex
    echo   npm run tauri:dev
    echo.
) else if "%MODE%"=="--build" (
    echo 🏗️ Construyendo CubaCodex...
    
    if not exist "cubacodex" (
        echo 📥 Clonando repositorio...
        git clone https://github.com/usuario/cubacodex.git
    )
    
    cd cubacodex
    
    echo 📥 Instalando dependencias...
    call npm install
    
    echo 🏗️ Compilando...
    call npm run tauri:build
    
    echo ✅ Build completado
    echo.
    echo El instalador se encuentra en: src-tauri\target\release\bundle\
    echo.
) else (
    echo ❓ Uso: %0 [opción]
    echo.
    echo Opciones:
    echo   --dev     Configurar entorno de desarrollo
    echo   --build   Construir instalador para producción
    echo.
    exit /b 1
)

echo ✅ Instalación completada exitosamente!
pause
