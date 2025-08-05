# Grid

Esta librería publica el componente `<Grid />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Grid } from "@inubekit/inubekit";
```

## Props

### children

Contenido que se renderiza dentro del componente **Grid**.

### templateColumns (opcional)

Define las columnas de la grilla mediante una plantilla.

1. **Por defecto:** `auto`.

### templateRows (opcional)

Define las filas de la grilla mediante una plantilla.

1. **Por defecto:** `auto`.

### gap (opcional)

Espaciado entre elementos de la grilla.

1. **Por defecto:** `0px`.

### justifyItems (opcional)

Alinea los elementos a lo largo del eje principal dentro de su área de grilla.

1. **Opciones:** `"center"`, `"start"`, `"end"`, `"flex-start"`, `"flex-end"`, `"left"`, `"right"`, `"inherit"`, `"initial"`, `"revert"`, `"unset"`, `"stretch"`, `"normal"`, `"self-start"`, `"self-end"`, `"baseline"`, `"first baseline"`, `"last baseline"`, `"legacy right"`, `"legacy left"`, `"legacy center"`.
2. **Por defecto:** `"stretch"`.

### alignItems (opcional)

Alinea los elementos a lo largo del eje transversal dentro de su área de grilla.

1. **Opciones:** `"center"`, `"start"`, `"end"`, `"flex-start"`, `"flex-end"`, `"self-start"`, `"self-end"`, `"baseline"`, `"first baseline"`, `"last baseline"`, `"safe center"`, `"unsafe center"`, `"inherit"`, `"initial"`, `"revert"`, `"revert-layer"`, `"unset"`.
2. **Por defecto:** `"stretch"`.

### justifyContent (opcional)

Alinea toda la grilla dentro del contenedor a lo largo del eje principal.

1. **Opciones:** `"flex-start"`, `"flex-end"`, `"center"`, `"space-between"`, `"space-around"`, `"space-evenly"`, `"start"`, `"end"`, `"left"`, `"right"`, `"inherit"`, `"initial"`, `"revert"`, `"unset"`, `"stretch"`, `"normal"`.
2. **Por defecto:** `"start"`.

### alignContent (opcional)

Alinea toda la grilla dentro del contenedor a lo largo del eje transversal.

1. **Opciones:** `"baseline"`, `"flex-start"`, `"flex-end"`, `"center"`, `"space-between"`, `"space-around"`, `"space-evenly"`, `"start"`, `"end"`, `"inherit"`, `"initial"`, `"revert"`, `"unset"`, `"stretch"`, `"normal"`.
2. **Por defecto:** `"start"`.

### autoColumns (opcional)

Define el tamaño de las columnas creadas automáticamente.

1. **Por defecto:** `0px`.

### autoRows (opcional)

Define el tamaño de las filas creadas automáticamente.

1. **Por defecto:** `0px`.

### autoFlow (opcional)

Controla cómo se colocan automáticamente los elementos en la grilla.

1. **Opciones:** `"row"`, `"column"`, `"dense"`, `"row dense"`, `"column dense"`.
2. **Por defecto:** `"row"`.

### margin (opcional)

Margen exterior del componente.

1. **Por defecto:** `0px`.

### padding (opcional)

Espaciado interior del componente.

1. **Por defecto:** `0px`.

### height (opcional)

Altura del componente.

1. **Por defecto:** `auto`.

### width (opcional)

Ancho del componente.

1. **Por defecto:** `auto`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
