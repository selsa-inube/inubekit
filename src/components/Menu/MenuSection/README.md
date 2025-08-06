# MenuSection

Esta librería publica el subcomponente `<MenuSection />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.

## Importación

```tsx
import { MenuSection } from "@inubekit/inubekit";
```

## Props

### children

Elementos del menú que pertenecen a esta sección.

1. Tipo: `ReactNode`

### title (opcional)

Título opcional de la sección que se muestra como encabezado.

1. Tipo: `string`

### divider

Controla si se muestra un divisor antes de la sección.

1. Tipo: `boolean`
2. **Por defecto:** `false`

## Personalización

### Tokens

Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
