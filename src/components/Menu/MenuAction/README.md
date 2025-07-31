# MenuAction

Esta librería publica el subcomponente `<MenuAction />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.

## Importación

```tsx
import { MenuAction } from "@inubekit/inubekit";
```

## Props

### action

Función que se ejecuta cuando se hace clic en el elemento del menú.

1. Tipo: `() => void`

### title

Texto principal del elemento del menú.

1. Tipo: `string`

### description (opcional)

Texto secundario que aparece debajo del título.

1. Tipo: `string`

### spacing

Controla el espaciado interno del elemento.

1. Opciones: `"wide"`, `"compact"`
2. **Por defecto:** `"wide"`

### iconBefore (opcional)

Icono que aparece antes del texto.

1. Tipo: `JSX.Element`

### iconAfter (opcional)

Icono que aparece después del texto.

1. Tipo: `JSX.Element`

### disabled

Desactiva la interacción con el elemento del menú.

1. Tipo: `boolean`
2. **Por defecto:** `false`

## Personalización

### Tokens

Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
