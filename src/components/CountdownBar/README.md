# CountdownBar

Esta librería publica el componente `<CountdownBar />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { CountdownBar } from "@inubekit/inubekit";
```

## Props

### height (opcional)

Permite darle un grosor personalizado según la necesidad.

1. Tipo: `string`.
2. **Por defecto:** `4px`.

### appearance (opcional)

Colores utilizados para identificar el estado del componente.

1. Opciones: `"primary"`, `"success"`, `"warning"`, `"danger"`, `"help"`, `"dark"`, `"gray"`, `"light"`.
2. **Por defecto:** `"primary"`.

### duration (opcional)

La duración total de la animación, en milisegundos.

1. Tipo: `int`.
2. **Por defecto:** `3000`.

### paused (opcional)

Pausa o inicia la animación.

1. Tipo: `boolean`.
2. Opciones: `true`, `false`.
3. **Por defecto:** `false`.

### onCountdown (opcional)

Función que se ejecuta cuando la barra de progreso llega a cero.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
