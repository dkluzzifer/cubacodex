#!/bin/bash

# Script de instalación para CubaCodex - Linux

set -e

echo "🚀 Instalando CubaCodex..."

# Detectar distribución
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    VERSION=$VERSION_ID
else
    echo "❌ No se pudo detectar la distribución de Linux"
    exit 1
fi

echo "📋 Sistema detectado: $OS $VERSION"

# Verificar dependencias
echo "🔍 Verificando dependencias..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Instalando..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js encontrado: $(node --version)"
fi

if ! command -v cargo &> /dev/null; then
    echo "❌ Rust no está instalado. Instalando..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    source $HOME/.cargo/env
else
    echo "✅ Rust encontrado: $(rustc --version)"
fi

# Instalar dependencias del sistema
echo "📦 Instalando dependencias del sistema..."
sudo apt-get update
sudo apt-get install -y \
    libwebkit2gtk-4.0-dev \
    build-essential \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev

# Clonar o construir
if [ -z "$1" ] || [ "$1" = "--dev" ]; then
    echo "🔨 Configurando entorno de desarrollo..."
    
    if [ ! -d "cubacodex" ]; then
        echo "📥 Clonando repositorio..."
        git clone https://github.com/usuario/cubacodex.git
    fi
    
    cd cubacodex
    
    echo "📥 Instalando dependencias de Node..."
    npm install
    
    echo "✅ Entorno de desarrollo configurado correctamente"
    echo ""
    echo "Para iniciar el desarrollo:"
    echo "  cd cubacodex"
    echo "  npm run tauri:dev"
    
elif [ "$1" = "--build" ]; then
    echo "🏗️ Construyendo CubaCodex..."
    
    if [ ! -d "cubacodex" ]; then
        echo "📥 Clonando repositorio..."
        git clone https://github.com/usuario/cubacodex.git
    fi
    
    cd cubacodex
    
    echo "📥 Instalando dependencias..."
    npm install
    
    echo "🏗️ Compilando..."
    npm run tauri:build
    
    echo "✅ Build completado"
    echo ""
    echo "El instalador se encuentra en: src-tauri/target/release/bundle/"
    
else
    echo "❓ Uso: $0 [opción]"
    echo ""
    echo "Opciones:"
    echo "  --dev     Configurar entorno de desarrollo"
    echo "  --build   Construir instalador para producción"
    echo ""
    exit 1
fi

echo "✅ Instalación completada exitosamente!"
