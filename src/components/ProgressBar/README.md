# ProgressBar

Esta librería publica el componente `<ProgressBar />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { ProgressBar } from "@inubekit/inubekit";
```

## Props

### progress

Representa el porcentaje de progreso (0 a 100).

1. Tipo: `int`.

### animated (opcional)

Si es verdadero, agrega una animación brillante para indicar actividad cuando el progreso está atascado.

1. Tipo: `boolean`.
2. **Por defecto:** false.

### appearance (opcional)

Determina el esquema de colores de la barra de progreso.

1. Opciones: `"primary"`, `"success"`, `"warning"`, `"danger"`, `"help"`, `"dark"`, `"gray"`, `"light"`.
2. **Por defecto:** `"primary"`.

### height (opcional)

Establece la altura de la barra de progreso, permitiendo personalizar su grosor.

1. Tipo: `string`.
2. **Por defecto:** `"4px"`.

### onComplete (opcional)

Función callback que se ejecuta cuando el progreso alcanza el 100%.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
