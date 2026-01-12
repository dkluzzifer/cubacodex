# 🚀 CUBACODEX - DESCARGAR .EXE SIN COMPILAR

## 🎯 ALTERNATIVA: GITHUB ACTIONS

**¡No necesitas instalar NADA!** GitHub Actions compilará el proyecto en la nube y podrás descargar el `.exe` directamente.

---

## 📦 PASOS PARA OBTENER EL .EXE

### Paso 1: Subir a GitHub

1. **Crear repositorio** en GitHub:
   - Ir a: https://github.com/new
   - Nombre: `cubacodex`
   - Marcar "Public"
   - Clic en "Create repository"

2. **Subir código**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CubaCodex v1.0.0"
   git remote add origin https://github.com/TU-USUARIO/cubacodex.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Descargar el Build

#### Opción A: Descargar desde Actions (Más Fácil)

1. Ir a tu repositorio en GitHub
2. Clic en la pestaña **"Actions"**
3. Esperar que termine el build (verás ✓ verde)
4. Clic en el workflow completado
5. Bajar a **"Artifacts"**
6. Descargar:
   - `cubacodex-installer-msi` (instalador)
   - `cubacodex-exe` (ejecutable directo)

#### Opción B: Trigger Manual del Build

1. Ir a: **Actions** → **Build CubaCodex for Windows**
2. Clic en **"Run workflow"**
3. Opcionalmente agregar razón (ej: "Manual build for testing")
4. Clic en **"Run workflow"** (botón verde)
5. Esperar y descargar de Artifacts

---

## 📂 QUÉ ES GITHUB ACTIONS?

**GitHub Actions** es un servicio de CI/CD (Continuous Integration/Continuous Deployment) que:

- ✅ Compila automáticamente tu código en servidores de GitHub
- ✅ Ejecuta en Windows real con Rust instalado
- ✅ Genera el `.exe` sin que tú instales nada
- ✅ Crea artefactos descargables
- ✅ Gratis y sin límites

---

## 🎨 ARTEFACTOS GENERADOS

Cuando el build termine, encontrarás:

### 1. cubacodex-installer-msi.zip

Contiene:
- `cubacodex_1.0.0_x64_en-US.msi` (~50-80MB)

**Uso:** Instalador profesional
- Instala la aplicación en Program Files
- Crea accesos directos
- Se registra en "Agregar o quitar programas"

### 2. cubacodex-exe.zip

Contiene:
- `cubacodex.exe` (~40-60MB)

**Uso:** Ejecutable portátil
- No requiere instalación
- Se puede ejecutar desde cualquier carpeta
- Ideal para pruebas rápidas

---

## ⚡ GUÍA COMPLETA PASO A PASO

### Paso 1: Crear cuenta en GitHub (si no tienes)

1. Ir a: https://github.com/signup
2. Crear cuenta gratuita
3. Verificar email si es necesario

### Paso 2: Crear repositorio

1. Clic en: **+** → **New repository**
2. Configurar:
   - **Repository name**: `cubacodex`
   - **Description**: `IDE de código asistido por IA multiplataforma`
   - **Visibility**: **Public** (importante para que funcione Actions)
3. Clic en **"Create repository"**

### Paso 3: Subir el código

Abre PowerShell en `C:\Users\Administrator\Documents\cubacodexx`:

```powershell
# 1. Inicializar Git
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear primer commit
git commit -m "Initial commit: CubaCodex v1.0.0"

# 4. Agregar remoto (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/cubacodex.git

# 5. Configurar rama principal
git branch -M main

# 6. Subir
git push -u origin main
```

**Nota:** Si te pide usuario/contraseña, crea un **Personal Access Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Agregar nombre → Seleccionar: `repo`, `workflow`
3. Generar y copiar el token
4. Usar el token como contraseña

### Paso 4: Esperar el build automático

1. Ir a tu repositorio en GitHub
2. Clic en **Actions**
3. Verás el build en ejecución o completado
4. Espera el ✓ verde (demora 5-10 minutos)

### Paso 5: Descargar el .exe

1. En Actions, clic en el workflow completado (nombre: `Build CubaCodex for Windows`)
2. Bajar a **"Artifacts"**
3. Descargar ambos:
   - `cubacodex-installer-msi`
   - `cubacodex-exe`

### Paso 6: Ejecutar

Descomprime y ejecuta:
- `cubacodex_1.0.0_x64_en-US.msi` (instalador)
- O `cubacodex.exe` (portátil)

---

## 🔄 TRIGGER MANUAL DEL BUILD

Si quieres un build nuevo sin hacer cambios:

1. GitHub → Repositorio → **Actions**
2. Clic en **"Build CubaCodex for Windows"**
3. Clic en **"Run workflow"** → **"Run workflow"**
4. Esperar ~5-10 minutos
5. Descargar de Artifacts

---

## 📋 COMPROBACIÓN DE PASOS

- [ ] Cuenta de GitHub creada
- [ ] Repositorio creado (visibility: Public)
- [ ] Código subido con `git push`
- [ ] Workflow de Actions visible
- [ ] Build completado (✓ verde)
- [ ] Artifacts descargados
- [ ] .exe descomprimido
- [ ] Aplicación ejecuta correctamente

---

## 💡 VENTAJAS DE ESTE MÉTODO

| Aspecto | Local Build | GitHub Actions |
|---------|-------------|----------------|
| **Instalación** | Rust, Node, VS Build Tools | ¡NADA! |
| **Tiempo** | 20-60 minutos | 5-10 minutos |
| **Espacio** | 2-3 GB | 0 MB |
| **Compatibilidad** | Solo Windows | Funciona en cualquier OS |
| **Costo** | CPU + tiempo | Gratis |
| **Actualizaciones** | Recompilar cada vez | Automático con git push |

---

## 🚨 SOLUCIÓN DE ERRORES

### Error: "Actions tab not found"

**Causa:** El archivo workflow no está en `.github/workflows/`

**Solución:** Verifica que existe:
```
.github/workflows/build-windows.yml
```

### Error: "Resource not accessible"

**Causa:** El repositorio es privado

**Solución:** Cambiar a Public:
1. GitHub → Repositorio → Settings
2. Danger Zone → Change visibility
3. Seleccionar **Public**

### Error: "Build failed"

**Causa:** Error en el código

**Solución:**
1. Ir a Actions → Clic en el workflow fallido
2. Ver los logs rojos
3. Corregir el error en tu código
4. Hacer git commit y push para reintentar

### Error: "Permission denied"

**Causa:** No tienes permisos para usar Actions

**Solución:** Verifica que el repositorio es Public

---

## 📞 AYUDA

### Si no sabes usar Git:

1. **GitHub Desktop** (gráfico, más fácil):
   - Descargar: https://desktop.github.com/
   - Arrastrar la carpeta del proyecto
   - Clic en "Publish repository"
   - Seguir instrucciones en pantalla

2. **Guía de Git básica**:
   - https://git-scm.com/docs/gittutorial
   - https://learngitbranching.js.org/

### Si necesitas ayuda con GitHub Actions:

- Documentación: https://docs.github.com/en/actions
- Foros: https://github.community/t/github-actions

---

## 🎯 RESUMEN FINAL

```
1. Crear repositorio Public en GitHub
2. Subir código: git push
3. Esperar build automático (5-10 min)
4. Descargar de Actions → Artifacts
5. Ejecutar: cubacodex.exe
```

---

**¡Listo! Sube tu código a GitHub y podrás descargar el .exe compilado sin instalar nada en tu computadora!** 🚀

¿Necesitas ayuda con algún paso específico?
