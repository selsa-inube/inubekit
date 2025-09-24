# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

Este proyecto sigue el formato [Keep a Changelog](https://keepachangelog.com/) y utiliza versionado [SemVer](https://semver.org/lang/es/).

## [v6.1.0] - 2025-09-19 (Fri)

### ✨ Added

- _No se agregaron nuevas funcionalidades en esta versión._

### 🔄 Changed

- Se actualizó la dependencia `react-router-dom` de la versión `^6.22.3` a `^7.9.1`. Esta actualización incluye mejoras y nuevas funcionalidades en la gestión de rutas, manteniendo compatibilidad con las versiones anteriores.

- Aunque es una versión principal para `react-router-dom`, el proyecto mantiene compatibilidad con la API pública para minimizar impactos.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v6.0.0] - 2025-08-26 (Tue)

### 🔥 Breaking Change

- **Actualización de dependencias principales**:  
  Se actualizaron las versiones de varias dependencias clave en `peerDependencies` y `devDependencies`, que pueden afectar la compatibilidad del proyecto:
  - `react` y `react-dom` actualizados de la versión `^18.2.0` a la versión fija `19.1.1`.

  - `@types/react` y `@types/react-dom` actualizados de versiones `^18.x` a `19.1.1`.

  - Actualizaciones notables en Storybook:
    - Pasó de la versión `^8.0.x` a la versión `^9.1.3` (addons y core).

  - Otros paquetes relacionados actualizados:
    - `eslint-plugin-storybook` de `8.0.2` a `9.1.3`.
    - `@typescript-eslint` plugins y parser actualizados a `^6.14.0`.
    - `vite` mantiene `^5.0.8` pero se actualizan dependencias relacionadas.

- **Impacto:**  
  La actualización de React y React DOM a React 19 puede implicar ruptura de compatibilidad con proyectos que usen React 18 o versiones menores.  
  También, la actualización a Storybook 9 requiere revisar configuraciones y addons usados.

### 🔄 Changed

- Ajuste del archivo `package.json` para reflejar estas nuevas versiones y asegurar la correcta resolución de dependencias.

### ⚠️ Recomendaciones y migración

- **React 19:**
  - Estar atentos a las futuras guías oficiales de React sobre migración a esta nueva versión [versionamiento React](https://legacy.reactjs.org/versions/).
  - Revisa componentes que usen APIs que puedan cambiar o depreciarse.

- **Storybook 9:**
  - Consulta la [guía de version Storybook 9](https://storybook.js.org/blog/storybook-9/) para ajustes en configuración, addons y estructura.
  - Revisa addons personalizados o configuraciones específicas para compatibilidad.

- Realiza pruebas completas en tus proyectos para asegurar estabilidad y correcto funcionamiento con las nuevas versiones.

---

## [v5.2.0] - 2025-08-15 (Fri)

### ✨ Added

- **Avatar**: Se extendió el componente con la propiedad opcional `unreadNotifications`, utilizada en **User** y **Header** para mostrar visualmente el número de notificaciones no leídas.

- **Documentación:** Se creó el README para los componentes y subcomponentes:
  - **CountdownBar**, **Blanket**, **Toggle**, **Yearpicker**, **Link**, **Monthpicker**, **ProgressBar**, **Radio**, **Spinner**, **User**, **Grid** y **Hooks**.

  - **Menu** (_MenuUser_, _MenuSection_, _MenuLink_, _MenuItem_, _MenuHeading_, _MenuAction_).

  - **Table** (_Caption_, _Col_, _Colgroup_, _Pagination_, _Tbody_, _Td_, _Tfoot_, _Thead_, _Tr_).

  - **Breadcrumbs** (_BreadcrumbMenuLink_, _BreadcrumbMenu_, _BreadcrumbLink_, _BreadcrumbEllipsis_).

### 🔄 Changed

- _No se realizaron cambios en funcionalidades existentes en esta versión._

### 🐛 Fixed

- **Select:** Se ajustó el comportamiento de la propiedad `invalid` para mostrar correctamente mensajes de error.

- **Radio:** Se corrigió el error mostrado en consola al implementar el componente.

- **Header:** Se ajustó la gestión cuando no se recibe la propiedad `user` y se definió una altura fija.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

## [v5.1.0] - 2025-07-29 (Tue)

### ✨ Added

- **SkeletonLine**: Se agregó la propiedad `height` para permitir configurar la altura del componente.

- **Documentación**: Se creó el README para el componente **Skeleton**, incluyendo SkeletonLine y SkeletonIcon.

### 🔄 Changed

- _No se realizaron cambios en funcionalidades existentes en esta versión._

### 🐛 Fixed

- **Box**: Se corrigió el error donde la propiedad `width` recibía un valor inválido por typo, evitando que se aplicara correctamente.

- **Button**: Se corrigió la redirección en botones tipo `"link"` cuando están deshabilitados (`disabled=true`), evitando navegaciones indeseadas.

### ⚠️ Deprecated

- _No se ha marcado ninguna funcionalidad como obsoleta en esta versión._

### ❌ Removed

- _No se ha eliminado ninguna funcionalidad en esta versión._

### 🔒 Security

- _No se han abordado vulnerabilidades en esta versión._

---

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
    - El contador de caracteres ahora se muestra automáticamente según las propiedades minLength y/o maxLength.

    - Para activar el contador, basta con definir minLength y/o maxLength; no es necesario usar una prop específica.

    - Los usos anteriores de la prop `counter` deben eliminarse y ajustarse al nuevo comportamiento basado en `minLength` y `maxLength`.

  - **Migración**
    - Elimina la prop `counter` de todas las instancias de `IInput`. Si necesitas funcionalidad de contador, revisa la documentación para alternativas.

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
