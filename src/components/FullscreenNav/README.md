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

### portalId

Identificador del nodo donde se renderizará el menú.

### navigation

Objeto que define la estructura de la navegación, incluyendo secciones y enlaces.

### actions (opcional)

Arreglo de acciones que se pueden realizar desde el menú.

### footerLabel (opcional)

Texto que se mostrará en el pie de página del menú.

1. **Por defecto: ©2025 - Inube**

### footerLogo (opcional)

URL de una imagen que se mostrará como logo en el pie de página.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
