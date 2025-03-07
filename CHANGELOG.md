# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

Este proyecto sigue el formato [Keep a Changelog](https://keepachangelog.com/) y utiliza versionado [SemVer](https://semver.org/lang/es/).

## [v1.2.0] - 2025-03-07 (Fri)

### ✨ Added

- **Prop showCurrentStepNumber en Assisted:** Se añadió esta nueva propiedad booleana para controlar la visualización del número del paso actual.

- **Componente Box:** Creación del nuevo componente Box con su respectiva documentación.

- **Documentación README:** Se añadió el README para los componentes Assisted, Checkbox y Textarea.

- **Documentación TOKENS:** Se agregaron archivos de tokens para el componente Checkbox.

### 🔄 Changed

- **Refactorización en Nav:** Ajuste del padding y width de la propiedad footerLogo.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **Errores en consola:** Se solucionaron problemas de jerarquización de etiquetas HTML en los componentes Checkbox y Textarea.

- **Componente Assisted (versión móvil):** Corrección del colapso del componente Text cuando el nombre del paso era extenso (size="small").

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v1.1.0] - 2025-02-03 (Mon)

### ✨ Added

- **Nuevos atributos en Divider**: Se agregaron los atributos `marginTop` y `marginBottom` para la gestión de márgenes.

- **Atributo isActive en FullscreenNav**: Se añadió el atributo `isActive`, que controla el estado selected del componente NavLink.

- **Documentación README**: Se creó y ajusto el README para los componentes `Avatar`, `Divider`, `Icon`, `Nav`, `Foundations`, `FullscreenNav`, `Text`.

- **Documentación TOKENS**: Se agregaron los archivos _TOKENS_ a los componentes para mostrar cómo están definidos los tokens de estilo en cada componente.

### 🔄 Changed

- **Gestión de selected en Nav**: El atributo `isActive` agregado se encargará de gestionar el atributo `selected` de NavLink, y este será definido por una función a desarrollar en cada proyecto. Pueden guiarse para su realización en la función `updatedNavigation` en las historias definidas del componente.

- **Historias de Input**: Se agruparon las historias del componente Input en una carpeta.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **Cierre de fullscreenNav**: Se ajustó el proceso de cierre del componente al seleccionar un NavLink.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v1.0.0] - 2025-01-20 (Mon)

### ✨ Added

- **Agrupación de librerías**: Consolidación de las siguientes librerías en una sola:

- `inubekit-assisted`
- `inubekit-autocomplete`
- `inubekit-autosuggest`
- `inubekit-avatar` - _Componente documentado_
- `inubekit-blanket`
- `inubekit-breadcrumbs`
- `inubekit-button`
- `inubekit-checkbox`
- `inubekit-checkpicker`
- `inubekit-countdownbar`
- `inubekit-date`
- `inubekit-divider` - _Componente documentado_
- `inubekit-fieldset`
- `inubekit-flag`
- `inubekit-foundations` - _Componente documentado_
- `inubekit-fullscreennav` - _Componente documentado_
- `inubekit-grid`
- `inubekit-header`
- `inubekit-hooks`
- `inubekit-icon` - _Componente documentado_
- `inubekit-input`
- `inubekit-label`
- `inubekit-link`
- `inubekit-menu`
- `inubekit-monthpicker`
- `inubekit-nav` - _Componente documentado_
- `inubekit-progressbar`
- `inubekit-radio`
- `inubekit-select`
- `inubekit-skeleton`
- `inubekit-spinner`
- `inubekit-stack`
- `inubekit-table`
- `inubekit-tabs`
- `inubekit-tag`
- `inubekit-text` - _Componente documentado_
- `inubekit-textarea`
- `inubekit-toggle`
- `inubekit-user`
- `inubekit-yearpicker`

- **Nota**: _Las funcionalidades de estas librerías permanecen sin cambios. Este cambio es solo estructural para mejorar la gestión y distribución._

### 🔄 Changed

- **Importación de componentes**: El proceso de importación ha cambiado. Ahora, los componentes deben importarse desde la librería principal:

  ```javascript
  // Antes:
  import { Button } from "@inubekit/button";

  // Ahora:
  import { Button } from "@inubekit/inubekit";
  ```

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- _No se han corregido errores en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---
