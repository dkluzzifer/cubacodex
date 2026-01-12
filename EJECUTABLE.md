# CubaCodex - EJECUTABLE .EXE

## 🚀 EJECUTABLE .EXE INCLUIDO

El ejecutable **`cubacodex.exe`** ya está incluido en este proyecto.

---

## 📂 UBICACIÓN

El ejecutable se encuentra en:
```
.\cubacodex.exe
```

Si no existe, ejecuta:
```powershell
.\build-exe.bat
```

---

## ⚡ USO RÁPIDO

### Windows:

1. **Doble clic** en `cubacodex.exe`
2. **O** arrastrarlo al escritorio para acceso rápido
3. **O** crear acceso directo:
   - Clic derecho → Crear acceso directo

---

## ✅ PRIMERA EJECUCIÓN

### Windows 10/11 SmartScreen:

Es posible que Windows muestre una advertencia:

> "Windows Defender SmartScreen impidió el inicio de una app no reconocida"

**Solución:**
1. Clic en "Más información"
2. Clic en "Ejecutar de todos modos"

Esto es normal para aplicaciones no firmadas digitalmente.

---

## 🎨 ICONO DE LA APLICACIÓN

El icono mostrado es el diseño de **CubaCodex**:
- Fondo oscuro `#1e1e1e`
- Acento azul `#61afef`
- Símbolos de código y editor
- Diseño profesional estilo IDE

Si no se muestra el icono correctamente:
1. Copiar el ejecutable a una ubicación diferente
2. Crear un acceso directo nuevo
3. Verificar que el archivo `icon.ico` existe en `src-tauri/icons/`

---

## 🔄 ACTUALIZAR EL EJECUTABLE

Para regenerar el `.exe` con cambios recientes:

```powershell
# 1. Generar iconos (si cambió el diseño)
.\scripts\setup-icons.bat

# 2. Compilar
.\build-exe.bat

# 3. Verificar que se generó
.\cubacodex.exe
```

---

## 📦 INSTALADOR VS EJECUTABLE

### Ejecutable Portátil (.exe)

```
cubacodex.exe  (este archivo)
```

- No requiere instalación
- Corre desde cualquier carpeta
- Ideal para pruebas rápidas

### Instalador (.msi)

Ubicado en:
```
src-tauri/target/release/bundle/msi/cubacodex_1.0.0_x64_en-US.msi
```

- Instala la aplicación
- Crea accesos directos
- Se registra en "Agregar o quitar programas"
- Recomendado para distribución

---

## ⚠️ REQUISITOS DEL SISTEMA

- **Windows:** 10, 11 (64-bit)
- **RAM:** 4GB mínimo (8GB recomendado)
- **Espacio en disco:** 200MB para instalación
- **Red:** Para IA online (Ollama funciona offline)

---

## 🤖 CONFIGURACIÓN DE IA

El `.exe` incluye todo lo necesario. Solo necesitas:

### Ollama (Local, Gratis):

1. Instalar Ollama: https://ollama.ai/
2. Abrir PowerShell y ejecutar:
   ```powershell
   ollama pull codellama
   ```
3. CubaCodex detectará automáticamente

### Google Gemini (Online, Gratis):

1. Crear cuenta en https://aistudio.google.com/
2. Obtener API Key gratis
3. Configurar en CubaCodex

---

## 🎮 TECLAS RÁPIDAS

| Acción | Atajo |
|---------|--------|
| Nuevo archivo | Ctrl + N |
| Abrir archivo | Ctrl + O |
| Guardar | Ctrl + S |
| Guardar como | Ctrl + Shift + S |
| Cerrar archivo | Ctrl + W |
| Copiar | Ctrl + C |
| Cortar | Ctrl + X |
| Pegar | Ctrl + V |
| Deshacer | Ctrl + Z |
| Rehacer | Ctrl + Y |
| Buscar | Ctrl + F |
| Reemplazar | Ctrl + H |

---

## 🐛 REPORTAR BUGS

Si encuentras un error al ejecutar `.cubacodex.exe`:

1. Abrir el **Developer Tools** (si está en modo dev)
2. Ver la consola para mensajes de error
3. Reportar en GitHub Issues con:
   - Versión de Windows
   - Captura de pantalla del error
   - Mensaje de error exacto
   - Pasos para reproducir

---

## 📞 SOPORTE

- **Documentación:** Ver `README.md`
- **Guía de desarrollo:** Ver `docs/DEVELOPMENT.md`
- **Generar ejecutable:** Ver `docs/GENERAR_EXE.md`
- **Issues:** https://github.com/usuario/cubacodex/issues

---

**¡Listo para programar con IA!** 🚀
