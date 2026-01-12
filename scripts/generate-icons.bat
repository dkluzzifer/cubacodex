@echo off
REM Script para generar iconos PNG desde SVG para Windows
REM Requiere: ImageMagick o GIMP

set ICON_SVG=public\icon.svg
set OUTPUT_DIR=src-tauri\icons

if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

echo Generando iconos para CubaCodex...

REM Intentar usar convert de ImageMagick
where convert >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Usando ImageMagick...
    
    REM Generar diferentes tamaños de PNG
    convert "%ICON_SVG%" -resize 32x32 "%OUTPUT_DIR%\32x32.png"
    convert "%ICON_SVG%" -resize 128x128 "%OUTPUT_DIR%\128x128.png"
    convert "%ICON_SVG%" -resize 256x256 "%OUTPUT_DIR%\256x256.png"
    convert "%ICON_SVG%" -resize 512x512 "%OUTPUT_DIR%\512x512.png"
    convert "%ICON_SVG%" -resize 1024x1024 "%OUTPUT_DIR%\1024x1024.png"
    
    REM Generar icono para Windows (.ico)
    convert "%OUTPUT_DIR%\256x256.png" "%OUTPUT_DIR%\128x128.png" "%OUTPUT_DIR%\64x64.png" "%OUTPUT_DIR%\48x48.png" "%OUTPUT_DIR%\32x32.png" "%OUTPUT_DIR%\16x16.png" "%OUTPUT_DIR%\icon.ico"
    
    echo ✅ Iconos generados en: %OUTPUT_DIR%
    goto :end
) else (
    echo ImageMagick no encontrado.
    echo Por favor instálalo desde: https://imagemagick.org/script/download.php
    echo.
    echo O usar GIMP para convertir manualmente el archivo:
    echo %ICON_SVG%
    goto :end
)

:end
echo.
echo Iconos necesarios:
echo - 32x32.png
echo - 128x128.png
echo - 256x256.png
echo - 512x512.png
echo - 1024x1024.png
echo - icon.ico (Windows)
echo.
pause
