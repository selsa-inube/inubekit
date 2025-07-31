# Monthpicker

Esta librería publica el componente `<Monthpicker />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Monthpicker } from "@inubekit/inubekit";
```

## Props

### onChange

Función que se ejecuta cuando el usuario selecciona un mes.

### start (opcional)

El índice inicial de los meses a mostrar (0 para Enero, 11 para Diciembre).

1. Tipo: `int`.
2. **Por defecto:** `0`.

### end (opcional)

El índice final de los meses a mostrar (0 para Enero, 11 para Diciembre).

1. Tipo: `int`.
2. **Por defecto:** `11`.

### locales (opcional)

Configuración regional para los nombres de los meses.

1. Tipo: `string`.
2. **Por defecto:** `"es-ES"`.

### order (opcional)

Orden en que se muestran los meses.

1. Opciones: `asc`, `desc`.
2. **Por defecto:** `asc`.

### placeholder (opcional)

Texto que se muestra en el campo cuando está vacío.

1. Tipo: `string`.

### value (opcional)

El mes actualmente seleccionado.

1. Tipo: `string`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
