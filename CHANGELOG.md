# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

Este proyecto sigue el formato [Keep a Changelog](https://keepachangelog.com/) y utiliza versionado [SemVer](https://semver.org/lang/es/).

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
- `inubekit-divider`
- `inubekit-fieldset`
- `inubekit-flag`
- `inubekit-foundations` - _Componente documentado_
- `inubekit-fullscreennav`
- `inubekit-grid`
- `inubekit-header`
- `inubekit-hooks`
- `inubekit-icon` - _Componente documentado_
- `inubekit-input`
- `inubekit-label`
- `inubekit-link`
- `inubekit-menu`
- `inubekit-monthpicker`
- `inubekit-nav`
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
