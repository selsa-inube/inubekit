# Link

Esta librería publica el componente `<Link />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Link } from "@inubekit/inubekit";
```

## Props

### children

El texto que se mostrará en el enlace.

1. Tipo: `ReactNode` o `string`
2. **Por defecto: `false`**

### path

Es la ruta a donde el Link va a navegar y es requerida.

### rel (opcional)

Especifica la relación entre el documento actual y el documento enlazado.

1. Tipo: `string`

### size (opcional)

Esta propiedad define el tamaño de la tipografía del enlace.

1. Opciones: `"large"`, `"medium"`, `"small"`.
2. **Por defecto:** `"large"`.

### target (opcional)

Especifica dónde abrir el enlace.

1. Opciones: `_blank`, `_self`, `_parent`, `_top`, `framename`

### type (opcional)

Esta propiedad define la tipografía que usará el enlace.

1. Opciones: `body`, `display`, `headline`, `label`, `title`.
2. **Por defecto:** `body`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
