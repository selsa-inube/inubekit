# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

Este proyecto sigue el formato [Keep a Changelog](https://keepachangelog.com/) y utiliza versionado [SemVer](https://semver.org/lang/es/).

## [v5.0.0] - 2025-07-11 (Fri)

### ✨ Added

- **Label**: Se agregó la propiedad `ellipsis` a la interface `ILabel` para permitir truncado con puntos suspensivos.

- **Select**: Se agregaron las propiedades `editable` y `clearable` a la interface `ISelect`.

- **Documentación**: Se creó el README para el componente **Fieldset**.

### 🔥 Breaking Change

- **Refactorización de Input**:

  - **Atributos modificados**: Se eliminó la propiedad `counter` de la interface.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface IInput {
      disabled?: boolean;
      focused?: boolean;
      fullwidth?: boolean;
      iconAfter?: React.ReactNode;
      iconBefore?: React.ReactNode;
      id: string;
      inputMode?: string;
      label?: string;
      message?: string;
      name?: string;
      onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
      placeholder?: string;
      required?: boolean;
      size?: IInputSize;
      status?: IInputStatus;
      type?: IInputInputType;
      value?: string | number;
      readOnly?: boolean;
      maxLength?: number;
      minLength?: number;
    }
    ```

    - **Props eliminadas**
      - `counter`

  - **Impacto**

    - Los componentes que usen la prop `counter` deben eliminarla.

  - **Migración**
    - Elimina la prop `counter` de todas las instancias de `IInput`. Si necesitas funcionalidad de contador, revisa la documentación para alternativas.

---

- **Refactorización de Fieldset**:

  - **Atributos modificados**: Se eliminaron las propiedades `type` y `size`.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface IFieldset {
      legend: string;
      children: React.ReactNode;
      spacing?: IFieldsetSpacing;
      width?: string;
      height?: string;
    }
    ```

    - **Props eliminadas**
      - `type`
      - `size`

  - **Impacto**

    - Los componentes que usen las props `type` o `size` deben eliminarlas.

  - **Migración**
    - Elimina las props `type` y `size` de todas las instancias de `IFieldset`. Consulta la nueva documentación para ajustar estilos o comportamiento según sea necesario.

---

- **Refactorización de Select**:

  - **Atributos modificados**: Se agregaron las propiedades `editable` y `clearable`.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface ISelect {
      disabled?: boolean;
      fullwidth?: boolean;
      id?: string;
      invalid?: boolean;
      label?: string;
      maxItems?: number;
      message?: string;
      name: string;
      onBlur?: (event: FocusEvent) => void;
      onChange: (name: string, value: string) => void;
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onFocus?: (event: FocusEvent) => void;
      onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
      options: IOption[];
      placeholder?: string;
      required?: boolean;
      size?: ISelectSize;
      value: string;
      showOptions?: boolean;
      picker?: boolean;
      showChevron?: boolean;
      editable?: boolean;
      clearable?: boolean;
    }
    ```

    - **Props nuevas**

      - `editable`
      - `clearable`

    - **Cambio de comportamiento**
      - El componente ahora solo permite selección de opciones, no edición manual.

  - **Impacto**

    - Si tu implementación dependía de la edición manual en Select, deberás revisar la lógica.

  - **Migración**
    - Revisa el uso de Select en tu proyecto y ajusta según las nuevas props y el comportamiento actualizado. Consulta la documentación para ejemplos de uso de `clearable` y `editable`.

---

### 🐛 Fixed

- **Button**: Ajuste de altura.

- **Tab**: Ajuste de warning.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- **Input**: Se eliminó la propiedad `counter` de la interface `IInput`.

- **Fieldset**: Se eliminaron las propiedades `type` y `size` de la interface `IFieldset`.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v4.1.1] - 2025-07-04 (Fri)

### ✨ Added

- _No se agregaron nuevas funcionalidades en esta versión._

### 🔄 Changed

- _No se realizaron cambios en funcionalidades existentes en esta versión._

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **CheckPicker**: Se corrigió que cuando hay múltiples valores iniciales, solo se mostraba el primero. Ahora se muestran correctamente todos los valores iniciales.

- **Autocomplete**: Se solucionó que el label no se actualizaba correctamente al cargar opciones de forma asincrónica.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v4.1.0] - 2025-06-05 (Thu)

### ✨ Added

- **Documentación**: Se creó el README para el componente **Date**.

### 🔄 Changed

- **Header**: La propiedad `logoURL` pasó a ser opcional en la interface.

- **Textarea**: Ajuste en el label para que su comportamiento sea consistente con el componente Input según el tamaño seleccionado.

- **Assisted**: Se ajustó el tamaño de la barra del componente.

- **Estilos**:
  - Ajustes en los componentes **Date**, **Input** y **Select** cuando están deshabilitados (`disabled=true`).

### 🐛 Fixed

- **Tag**: Se corrigió un problema que causaba fallos en pantallas responsivas.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v4.0.0] - 2025-05-27 (Tue)

### ✨ Added

- **Documentación**: Se crearon los READMEs para los componentes **Autosuggest** y **Tabs**.

- **Tabs**: Se agregó la posibilidad de incluir un icono en las pestañas (nueva propiedad en la interface `ITabs`).

### 🔥 Breaking Change

- **Refactorización de Select**:

  - **Atributos modificados**: La interfaz actualizo sus parámetros.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface ISelect {
      disabled?: boolean;
      fullwidth?: boolean;
      id?: string;
      invalid?: boolean;
      label?: string;
      maxItems?: number;
      message?: string;
      name: string;
      onBlur?: (event: FocusEvent) => void;
      onChange: (name: string, value: string) => void;
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onFocus?: (event: FocusEvent) => void;
      onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
      options: IOption[];
      placeholder?: string;
      required?: boolean;
      size?: ISelectSize;
      value: string;
      showOptions?: boolean;
      picker?: boolean;
      showChevron?: boolean;
    }
    ```

    - **Cambios en props**

    - _**Eliminados**_

      - `readonly`

    - _**Nuevos**_
      - `showChevron` Propiedad para controlar la visualización del ícono chevron.

  - **Impacto**

    - **Componentes propios del proyecto:** Revisar todos los que usen ISelect para adaptar la nueva interfaz.

  - **Migración**: El cambio importante se basa en la eliminación de la propiedad readonly, la cual no estaba generando ningún efecto en el componente. Para casos en los que se desee deshabilitar el componente, invitamos a hacer uso de la propiedad disable. Para mayor información, recomendamos revisar el documento README del componente.

### 🐛 Fixed

- **Estilos**: Ajustes visuales en los componentes `Select` e `Input`.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- **Select**: Se eliminó la propiedad `readonly` de su interface.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v3.0.0] - 2025-05-07 (Wed)

### ✨ Added

- **Documentación**: Se crearon los READMEs para los componentes **Checkpicker** y **Tag**.

### 🔥 Breaking Change

- **Refactorización de Tag**:

  - **Atributos modificados**: La interfaz requiere nuevos parámetros.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface ITag {
      appearance: ITagAppearance;
      id?: string;
      label: string;
      removable?: boolean;
      displayIcon?: boolean;
      icon?: JSX.Element;
      onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
    }
    ```

    - **Cambios en props**

    - _**Eliminados**_

      - `weight`

    - _**Nuevos**_
      - `displayIcon`
      - `icon`

  - **Cambios en la definición de sus tokens**:

  Se ha modificado la estructura de la definición de tokens para simplificar y unificar la configuración de estilos:

  - _**Estructura anterior**_

  - Cada token _(primary, success, warning, etc.)_ contenía dos variantes anidadas: `normal` y `strong`.
  - Cada variante definía propiedades separadas para el `background.color` y el `content.appearance`.

  - _**Estructura actual**_

  Cada token ahora es un objeto único que contiene directamente las propiedades:

  - `background.color:` define el color de fondo principal del token.
  - `border.color:` define el color del borde asociado al token.
  - `content.appearance:` define la apariencia del contenido (texto, iconos, etc.).

  La estructura de los nuevos tokens se puede observar en el archivo [tokens.ts](./src/components/Tag/tokens.ts).

  - **Impacto**

    - **Componentes propios del proyecto:** Revisar todos los que usen ITag para adaptar la nueva interfaz.

  - **Migración**: Se recomienda revisar el documento README del componente, el cual se encuentra actualizado, para asegurar implementaciones correctas. También recomendamos adaptar la definición de tokens a la estructura actual para evitar rupturas en sus diseños.

### 🐛 Fixed

- **Checkpicker**: Se corrigió un problema relacionado con la selección en el componente.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v2.1.1] - 2025-04-30 (Wed)

### ✨ Added

- _No se agregaron nuevas funcionalidades en esta versión._

### 🔄 Changed

- _No se realizaron cambios en funcionalidades existentes en esta versión._

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **Input (type="money")**: Se corrigió que el valor inicial pasado por props no se formateara correctamente. Ahora el formato se aplica tanto al valor inicial como durante la entrada del usuario.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v2.1.0] - 2025-04-28 (Mon)

### ✨ Added

- _No se agregaron nuevas funcionalidades en esta versión._

### 🔄 Changed

- **FullscreenNav**: Se formalizó el uso de logos en el footer y se ajustó la interface, haciendo opcionales algunos atributos que antes eran requeridos.

- **Autocomplete**: Ahora el filtro se realiza por el `label` en vez de por el `value`.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **Input (type="money")**: Se corrigió el evento `onChange` para que el `target` incluya el atributo `name` correctamente.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v2.0.1] - 2025-04-23 (Wed)

### ✨ Added

- _No se agregaron nuevas funcionalidades en esta versión._

### 🔄 Changed

- _No se realizaron cambios en funcionalidades existentes en esta versión._

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- **Button**: Se corrigió que el alto del botón no se mantuviera constante cuando se pasa la prop `loading` (spinner), evitando cambios de tamaño inesperados.

- **Input**: Se solucionó el problema donde eliminar el atributo `label` generaba un espacio vacío que afectaba el diseño.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v2.0.0] - 2025-04-01 (Tue)

### ✨ Added

- **Extensión del componente Stack**: Ahora puede renderizarse como `<ul>` u `<ol>`.

- **Documentación README**:

  - Se añadieron READMEs para los componentes **Autocomplete**, **Select** y **Header**.
  - Se actualizó el README del componente **FullscreenNav** para reflejar los cambios estructurales.

### 🔥 Breaking Change

- **Refactorización de fullscreenNav**:

  - **Atributos modificados**: La interfaz `IFNav` ahora es `IFullscreenNav` y requiere nuevos parámetros.

  - **Detalles técnicos de su nueva interface**:

    ```jsx
    interface IFullscreenNav {
      reactPortalId: string;
      title?: string;
      sections: IFullscreenNavSection[];
      actions?: INavAction[];
      footerLabel?: string;
      footerLogo?: string;
      displaySubtitles?: boolean;
      collapse?: boolean;
    }
    ```

    - **Cambios en props**

      - _**Renombrados**_

        - `portalId` → `reactPortalId`
        - `navigation` → `sections (estructura diferente)`

      - _**Eliminados**_

        - `logoutPath`
        - `logoutTitle`

      - _**Nuevos**_
        - `title`
        - `collapse`
        - `displaySubtitles`

  - **Impacto**

    - **Componentes de inubekit afectados:** Header (requiere actualización de implementación).

    - **Componentes propios del proyecto:** Revisar todos los que usen FullscreenNav para adaptar la nueva interfaz.

  - **Migración**: Se recomienda revisar el documento README del componente, el cual se encuentra actualizado, para asegurar implementaciones correctas.

### 🐛 Fixed

- **Evento vacío en Autocomplete/Select**: Se corrigió el retorno de `name` y `value` en el evento `onChange`.

### ⚠️ Deprecated

- **Implementaciones antiguas de fullscreenNav**: Las propiedades y composición previas están obsoletas. Usar la nueva estructura.

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v1.3.0] - 2025-03-21 (Fri)

### ✨ Added

- **Componente Message:** Nuevo componente creado para mostrar mensajes.

- **Propiedad width en Button:** Se agregó la propiedad "width" para definir ancho específico.

### 🔄 Changed

- **Componente Flag (versión móvil):** Ajuste de estilos para evitar cortes visuales.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🐛 Fixed

- _No se reportaron errores corregidos en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

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
- `inubekit-avatar`
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
- `inubekit-foundations`
- `inubekit-fullscreennav`
- `inubekit-grid`
- `inubekit-header`
- `inubekit-hooks`
- `inubekit-icon`
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
- `inubekit-text`
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
