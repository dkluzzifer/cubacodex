#!/bin/bash

# Script para generar iconos PNG desde SVG
# Requiere: ImageMagick (convert)

ICON_SVG="public/icon.svg"
OUTPUT_DIR="src-tauri/icons"

mkdir -p "$OUTPUT_DIR"

echo "Generando iconos para CubaCodex..."

# Generar diferentes tamaños de PNG
convert "$ICON_SVG" -resize 32x32 "$OUTPUT_DIR/32x32.png"
convert "$ICON_SVG" -resize 128x128 "$OUTPUT_DIR/128x128.png"
convert "$ICON_SVG" -resize 256x256 "$OUTPUT_DIR/256x256.png"
convert "$ICON_SVG" -resize 512x512 "$OUTPUT_DIR/512x512.png"
convert "$ICON_SVG" -resize 1024x1024 "$OUTPUT_DIR/1024x1024.png"

# Generar icono para Windows (.ico)
convert "$OUTPUT_DIR/256x256.png" "$OUTPUT_DIR/128x128.png" "$OUTPUT_DIR/64x64.png" "$OUTPUT_DIR/48x48.png" "$OUTPUT_DIR/32x32.png" "$OUTPUT_DIR/16x16.png" "$OUTPUT_DIR/icon.ico"

# Generar icono para macOS (.icns)
mkdir -p "$OUTPUT_DIR/icon.iconset"
convert "$ICON_SVG" -resize 16x16 "$OUTPUT_DIR/icon.iconset/icon_16x16.png"
convert "$ICON_SVG" -resize 32x32 "$OUTPUT_DIR/icon.iconset/icon_16x16@2x.png"
convert "$ICON_SVG" -resize 32x32 "$OUTPUT_DIR/icon.iconset/icon_32x32.png"
convert "$ICON_SVG" -resize 64x64 "$OUTPUT_DIR/icon.iconset/icon_32x32@2x.png"
convert "$ICON_SVG" -resize 128x128 "$OUTPUT_DIR/icon.iconset/icon_128x128.png"
convert "$ICON_SVG" -resize 256x256 "$OUTPUT_DIR/icon.iconset/icon_128x128@2x.png"
convert "$ICON_SVG" -resize 256x256 "$OUTPUT_DIR/icon.iconset/icon_256x256.png"
convert "$ICON_SVG" -resize 512x512 "$OUTPUT_DIR/icon.iconset/icon_256x256@2x.png"
convert "$ICON_SVG" -resize 512x512 "$OUTPUT_DIR/icon.iconset/icon_512x512.png"
iconutil -c icns "$OUTPUT_DIR/icon.iconset" -o "$OUTPUT_DIR/icon.icns"

echo "✅ Iconos generados en: $OUTPUT_DIR"
echo ""
echo "Archivos creados:"
ls -lh "$OUTPUT_DIR"
