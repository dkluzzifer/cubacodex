#!/bin/bash

# Script para crear iconos PNG simples sin ImageMagick
# Crea iconos coloreados simples para CubaCodex

ICONS_DIR="src-tauri/icons"
OUTPUT="$ICONS_DIR"

mkdir -p "$ICONS_DIR"

echo "Generando iconos PNG para CubaCodex..."

# Función para crear icono con ImageMagick si está disponible
create_icon_with_magick() {
    local size=$1
    local output=$2
    
    if command -v convert &> /dev/null; then
        convert public/icon.svg -resize "${size}x${size}" "$output"
        echo "✅ Generado: $output ($size x $size)"
        return 0
    else
        echo "⚠️  ImageMagick no encontrado. Copiando icono por defecto..."
        cp public/icon-512.png "$output"
        return 0
    fi
}

# Generar iconos en diferentes tamaños
create_icon_with_magick 32 "$OUTPUT/32x32.png"
create_icon_with_magick 128 "$OUTPUT/128x128.png"
create_icon_with_magick 256 "$OUTPUT/256x256.png"
create_icon_with_magick 512 "$OUTPUT/512x512.png"

# Generar icono @2x
create_icon_with_magick 256 "$OUTPUT/128x128@2x.png"

# Generar icon.ico usando magick si está disponible
if command -v convert &> /dev/null; then
    echo "Generando icon.ico para Windows..."
    convert "$OUTPUT/256x256.png" "$OUTPUT/128x128.png" "$OUTPUT/64x64.png" "$OUTPUT/48x48.png" "$OUTPUT/32x32.png" "$OUTPUT/16x16.png" "$OUTPUT/icon.ico"
    echo "✅ Generado: $OUTPUT/icon.ico"
else
    echo "⚠️  No se pudo generar icon.ico. Copiando PNG..."
    cp "$OUTPUT/256x256.png" "$OUTPUT/icon.ico"
fi

# Generar icon.icns para macOS (si está disponible iconutil)
if command -v iconutil &> /dev/null; then
    echo "Generando icon.icns para macOS..."
    mkdir -p "$OUTPUT/icon.iconset"
    convert public/icon.svg -resize 16x16 "$OUTPUT/icon.iconset/icon_16x16.png"
    convert public/icon.svg -resize 32x32 "$OUTPUT/icon.iconset/icon_16x16@2x.png"
    convert public/icon.svg -resize 32x32 "$OUTPUT/icon.iconset/icon_32x32.png"
    convert public/icon.svg -resize 64x64 "$OUTPUT/icon.iconset/icon_32x32@2x.png"
    convert public/icon.svg -resize 128x128 "$OUTPUT/icon.iconset/icon_128x128.png"
    convert public/icon.svg -resize 256x256 "$OUTPUT/icon.iconset/icon_128x128@2x.png"
    convert public/icon.svg -resize 256x256 "$OUTPUT/icon.iconset/icon_256x256.png"
    convert public/icon.svg -resize 512x512 "$OUTPUT/icon.iconset/icon_256x256@2x.png"
    convert public/icon.svg -resize 512x512 "$OUTPUT/icon.iconset/icon_512x512.png"
    iconutil -c icns "$OUTPUT/icon.iconset" -o "$OUTPUT/icon.icns"
    echo "✅ Generado: $OUTPUT/icon.icns"
else
    echo "⚠️  iconutil no disponible (solo en macOS)"
fi

echo ""
echo "✅ Iconos generados en: $ICONS_DIR"
ls -lh "$ICONS_DIR"
