# Contributing to CubaCodex

Gracias por tu interés en contribuir a CubaCodex!

## Desarrollo

### Configuración del entorno

```bash
# Clonar el repositorio
git clone https://github.com/usuario/cubacodex.git
cd cubacodex

# Instalar dependencias
npm install

# Iniciar modo desarrollo
npm run tauri:dev
```

### Estructura del proyecto

- `src/` - Frontend React/TypeScript
- `src-tauri/` - Backend Rust
- `src/ui/` - Componentes UI
- `src/ai/` - Sistema de proveedores IA
- `src/core/` - Lógica de negocio
- `src/stores/` - Estado global (Zustand)

### Convenciones de código

- TypeScript para todo el frontend
- Rust para el backend Tauri
- Seguir el estilo de código existente
- Comments en español

### Pull Requests

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Reportar bugs

Usa [GitHub Issues](https://github.com/usuario/cubacodex/issues) para reportar bugs.

## Solicitar features

Usa [GitHub Issues](https://github.com/usuario/cubacodex/issues) para solicitar nuevas features.
