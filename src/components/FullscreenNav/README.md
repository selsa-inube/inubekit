# FullscreenNav

Esta librería publica el componente `<FullscreenNav />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { FullscreenNav } from "@inubekit/inubekit";
```

## Props

### reactPortalId

Identificador único del nodo donde se renderizará el menú.

### title (opcional)

Texto que aparecerá como encabezado principal del menú.

### sections

Arreglo de objetos que definen las secciones del menú.

### actions (opcional)

Arreglo de acciones secundarias que se mostrarán en una sección separada. Ideal para funcionalidades como "Cerrar sesión" o "Configuración".

### footerLabel (opcional)

Texto personalizable para el pie de página.

1. **Por defecto: ©2025 - Inube**

### footerLogo (opcional)

URL de una imagen que se mostrará como logo en el pie de página.

### displaySubtitles (opcional)

Propiedad que controla la visibilidad de los subtítulos en los elementos de navegación.

1. **Por defecto: false**

### collapse (opcional)

Propiedad que habilita/deshabilita el comportamiento de acordeón en las secciones.

1. **Por defecto: false**

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
