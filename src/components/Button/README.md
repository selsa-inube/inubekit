# Button

Este componente representa un botón reutilizable que admite estilos personalizados, íconos y un spinner de carga. Se puede renderizar como un botón clásico o como un enlace.

## Instalación

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.
- **react-router-dom**: se requiere si usas el tipo `link`.

## Importación

```tsx
import { Button } from "@inubekit/inubekit";
```

## Props

Puedes consultar la lista de Props en [props.ts](./props.ts)

## Comportamiento

- Si `loading` es `true`, se muestra un spinner y se oculta el contenido.
- Si `type` es `"link"` y no se provee `path`, se lanza una advertencia.
- La apariencia se adapta según el `variant` y `appearance` proporcionados.
- El ícono y texto cambian de estilo si se activa el estado `hover` desde el padre.

## Personalización

Este componente usa tokens definidos por tema (`styled-components ThemeContext`). Puedes personalizar su apariencia globalmente a través del `ThemeProvider`.

## Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)
