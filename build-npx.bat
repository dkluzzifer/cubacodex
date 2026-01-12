@echo off
REM Script de build que usa npx para Tauri CLI

echo ========================================
echo   CubaCodex - Build con npx
echo ========================================
echo.

REM Verificar dependencias
echo Verificando dependencias...
echo.

where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] npm no encontrado. Instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] npm encontrado
echo.

REM Verificar Rust
where cargo >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Rust no encontrado. Ejecuta: .\install-rust.bat
    pause
    exit /b 1
)

echo [OK] Rust encontrado
echo.

REM Instalar dependencias de Node si es necesario
if not exist "node_modules" (
    echo [ ] Instalando dependencias de Node...
    call npm install
    echo.
    if %ERRORLEVEL% NEQ 0 (
        echo [X] Error al instalar dependencias
        pause
        exit /b 1
    )
)

echo [OK] Dependencias de Node instaladas
echo.

REM Generar iconos si faltan
if not exist "src-tauri\icons\icon.ico" (
    echo [ ] Generando iconos...
    call scripts\setup-icons.bat
)

REM Compilar usando npx tauri (no requiere instalacion global)
echo.
echo ========================================
echo   Compilando CubaCodex
echo ========================================
echo.

REM Usar npx para ejecutar Tauri CLI sin instalacion global
echo Ejecutando: npx tauri build
echo.

npx tauri build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   [OK] BUILD EXITOSO
    echo ========================================
    echo.
    echo El ejecutable se encuentra en:
    echo   src-tauri\target\release\bundle\msi\
    echo.
    echo O directamente:
    echo   src-tauri\target\release\cubacodex.exe
    echo.
    
    REM Copiar a raiz
    if exist "src-tauri\target\release\cubacodex.exe" (
        copy "src-tauri\target\release\cubacodex.exe" ".\cubacodex.exe"
        echo [OK] Ejecutable copiado a: .\cubacodex.exe
        echo.
    )
    
    echo.
    echo Para ejecutar: .\cubacodex.exe
    echo.
) else (
    echo.
    echo ========================================
    echo   [X] BUILD FALLO
    echo ========================================
    echo.
    echo Posibles causas:
    echo   1. Error en el codigo
    echo   2. Faltan dependencias
    echo   3. Permisos insuficientes
    echo.
    echo Intenta limpiar cache:
    echo   cargo clean
    echo   npm cache clean --force
    echo.
    pause
    exit /b 1
)

pause
