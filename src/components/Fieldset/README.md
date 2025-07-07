# Fieldset

Esta librería publica el componente `<Fieldset />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Fieldset } from "@inubekit/inubekit";
```

## Props

### legend

Esta propiedad define el título o encabezado del fieldset.

### children

Permite incluir contenido dentro del fieldset.

### spacing (opcional)

Controla el espaciado de la leyenda y bordes.

1. `"wide" | "compact"`
2. **Por defecto: "compact"**

### width (opcional)

Define el ancho del fieldset.

1. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `width`.
2. **Por defecto: "auto"**

### height (opcional)

Define la altura del fieldset.

1. Puedes pasar cualquier cadena siempre que sea un valor válido para la propiedad CSS `height`.
2. **Por defecto: "auto"**

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
