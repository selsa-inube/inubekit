# Yearpicker

Esta librería publica el componente `<Yearpicker />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Yearpicker } from "@inubekit/inubekit";
```

## Props

### onChange

Función que maneja el cambio en la selección del año.

### start (opcional)

El año inicial que se mostrará en la lista de opciones.

1. **Por defecto:** `2000`.

### end (opcional)

El año final que se mostrará en la lista de opciones.

1. **Por defecto:** `año actual`.

### order (opcional)

Orden en que se muestran los años en la lista.

1. Opciones: `"asc"`, `"desc"`.
2. **Por defecto:** `"desc"`.

### placeholder (opcional)

Texto que se muestra en el campo cuando está vacío.

### value (opcional)

El valor del año actualmente seleccionado.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
