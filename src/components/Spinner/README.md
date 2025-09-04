# Spinner

Esta librería publica el componente `<Spinner />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Spinner } from "@inubekit/inubekit";
```

## Props

### size (opcional)

Diferentes tamaños que puede tener el componente, según la necesidad.

1. Opciones: `"large"`, `"medium"`, `"small"`.
2. **Por defecto:** `"medium"`.

### appearance (opcional)

Colores utilizados para identificar el estado del componente.

1. Opciones: `"primary"`, `"success"`, `"warning"`, `"danger"`, `"help"`, `"dark"`, `"gray"`, `"light"`.
2. **Por defecto:** `"primary"`.

### transparent (opcional)

Indica cuando el fondo del spinner debe tener color.

1. Tipo: `boolean`
2. **Por defecto:** `false`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
