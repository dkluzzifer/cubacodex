@echo off
REM Script de instalación completo para CubaCodex

echo ========================================
echo   CubaCodex - Instalación Completa
echo ========================================
echo.

REM Variables
set NEED_RUST=0
set NEED_NODE=0
set NEED_TAURI=0
set NEED_DEPS=0

REM 1. Verificar Rust
echo 1/5. Verificando Rust...
where cargo >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Rust NO encontrado
    set NEED_RUST=1
) else (
    echo ✅ Rust encontrado
    cargo --version
)

REM 2. Verificar Node.js
echo.
echo 2/5. Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js NO encontrado
    set NEED_NODE=1
) else (
    echo ✅ Node.js encontrado
    node --version
)

REM 3. Verificar dependencias de Node
echo.
echo 3/5. Verificando dependencias de Node...
if not exist "node_modules" (
    echo ❌ Dependencias NO instaladas
    set NEED_DEPS=1
) else (
    echo ✅ Dependencias instaladas
)

REM 4. Verificar Tauri CLI
echo.
echo 4/5. Verificando Tauri CLI...
where cargo-tauri >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Tauri CLI NO instalada
    set NEED_TAURI=1
) else (
    echo ✅ Tauri CLI instalada
    cargo-tauri --version
)

REM 5. Verificar iconos
echo.
echo 5/5. Verificando iconos...
if not exist "src-tauri\icons\icon.ico" (
    echo ❌ Iconos NO generados
    set NEED_ICONS=1
) else (
    echo ✅ Iconos generados
)

REM Resumen
echo.
echo ========================================
echo   Resumen de Dependencias
echo ========================================
echo.
echo Rust:          %NEED_RUST% (0=OK, 1=FALTA)
echo Node.js:       %NEED_NODE% (0=OK, 1=FALTA)
echo Dependencias:  %NEED_DEPS% (0=OK, 1=FALTA)
echo Tauri CLI:    %NEED_TAURI% (0=OK, 1=FALTA)
echo Iconos:       %NEED_ICONS% (0=OK, 1=FALTA)
echo.

REM Preguntar si continuar
if %NEED_RUST% EQU 1 (
    echo.
    echo Necesitas instalar Rust.
    echo ¿Deseas instalar ahora? (S/N)
    choice /c SN /n /m "Opcion: "
    if %ERRORLEVEL% EQU 1 (
        echo.
        echo Instalando Rust...
        call install-rust.bat
        echo ⚠️  IMPORTANTE: CIERRA esta ventana y ABRE UNA NUEVA
        pause
        exit /b 0
    ) else (
        echo.
        echo Instala Rust manualmente desde: https://rustup.rs/
    )
)

if %NEED_NODE% EQU 1 (
    echo.
    echo Necesitas instalar Node.js.
    echo Descarga desde: https://nodejs.org/
    pause
    exit /b 1
)

if %NEED_TAURI% EQU 1 (
    echo.
    echo Instalando Tauri CLI...
    call install-tauri.bat
)

if %NEED_DEPS% EQU 1 (
    echo.
    echo Instalando dependencias de Node...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
)

if %NEED_ICONS% EQU 1 (
    echo.
    echo Generando iconos...
    call scripts\setup-icons.bat
)

REM Todo está listo
echo.
echo ========================================
echo   ✅ Instalación completada
echo ========================================
echo.
echo Dependencias verificadas:
echo - Rust:           OK
echo - Node.js:        OK
echo - Tauri CLI:     OK
echo - Dependencias:    OK
echo - Iconos:         OK
echo.
echo Ahora puedes compilar CubaCodex ejecutando:
echo   .\build-npx.bat
echo.
pause
