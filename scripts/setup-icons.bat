@echo off
REM Script para crear iconos PNG simples sin ImageMagick
REM Crea iconos coloreados simples para CubaCodex en Windows

set ICONS_DIR=src-tauri\icons

if not exist "%ICONS_DIR%" mkdir "%ICONS_DIR%"

echo Generando iconos PNG para CubaCodex...

REM Verificar si ImageMagick esta disponible
where convert >nul 2>nul

if %ERRORLEVEL% EQU 0 (
    echo [OK] ImageMagick encontrado. Generando iconos con ImageMagick
    
    REM Generar iconos en diferentes tamanos
    convert public\icon.svg -resize 32x32 "%ICONS_DIR%\32x32.png"
    echo [OK] Generado: %ICONS_DIR%\32x32.png
    
    convert public\icon.svg -resize 128x128 "%ICONS_DIR%\128x128.png"
    echo [OK] Generado: %ICONS_DIR%\128x128.png
    
    convert public\icon.svg -resize 256x256 "%ICONS_DIR%\256x256.png"
    echo [OK] Generado: %ICONS_DIR%\256x256.png
    
    convert public\icon.svg -resize 512x512 "%ICONS_DIR%\512x512.png"
    echo [OK] Generado: %ICONS_DIR%\512x512.png
    
    REM Generar icono @2x
    convert public\icon.svg -resize 256x256 "%ICONS_DIR%\128x128@2x.png"
    echo [OK] Generado: %ICONS_DIR%\128x128@2x.png
    
    REM Generar icon.ico para Windows
    echo Generando icon.ico para Windows...
    convert "%ICONS_DIR%\256x256.png" "%ICONS_DIR%\128x128.png" "%ICONS_DIR%\64x64.png" "%ICONS_DIR%\48x48.png" "%ICONS_DIR%\32x32.png" "%ICONS_DIR%\16x16.png" "%ICONS_DIR%\icon.ico"
    echo [OK] Generado: %ICONS_DIR%\icon.ico
    
) else (
    echo [!] ImageMagick no encontrado.
    echo Generando iconos por defecto usando copia...
    
    REM Copiar icono PNG existente a todos los tamanos necesarios
    copy public\icon-512.png "%ICONS_DIR%\32x32.png" >nul
    echo [OK] Generado: %ICONS_DIR%\32x32.png
    
    copy public\icon-512.png "%ICONS_DIR%\128x128.png" >nul
    echo [OK] Generado: %ICONS_DIR%\128x128.png
    
    copy public\icon-512.png "%ICONS_DIR%\256x256.png" >nul
    echo [OK] Generado: %ICONS_DIR%\256x256.png
    
    copy public\icon-512.png "%ICONS_DIR%\512x512.png" >nul
    echo [OK] Generado: %ICONS_DIR%\512x512.png
    
    copy public\icon-512.png "%ICONS_DIR%\128x128@2x.png" >nul
    echo [OK] Generado: %ICONS_DIR%\128x128@2x.png
    
    REM Crear icon.ico simple (copiando el PNG)
    copy public\icon-512.png "%ICONS_DIR%\icon.ico" >nul
    echo [OK] Generado: %ICONS_DIR%\icon.ico (como PNG renombrado)
)

echo.
echo ========================================
echo   [OK] Iconos generados en: %ICONS_DIR%
echo ========================================
echo.

REM Listar archivos creados
dir /b "%ICONS_DIR%"

echo.
echo Iconos necesarios para Tauri:
echo - 32x32.png
echo - 128x128.png
echo - 128x128@2x.png
echo - icon.ico
echo.
echo Si quieres iconos de mejor calidad, instala ImageMagick:
echo https://imagemagick.org/script/download.php
echo.

pause
