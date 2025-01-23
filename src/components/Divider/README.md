# Divider

Esta librería publica el componente `<Divider />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Divider } from "@inubekit/inubekit";
```

## Props

### dashed (opcional)

Esta propiedad booleana permite definir si el divisor será una línea sólida en puntos.

1. **Por defecto: false**: viene definida como una línea sólida.

### marginTop (opcional)

Permite controlar la propiedad CSS `margin`, enfocándose en la parte superior del componente.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de margin en CSS.

### marginBottom (opcional)

Permite controlar la propiedad CSS `margin`, enfocándose en la parte inferior del componente.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de margin en CSS.

## Personalización

### Tokens

- Este componente no soporta tokens para la definición del color del divisor.
