# Stack

Esta librería publica el componente `<Stack />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Stack } from "@inubekit/inubekit";
```

## Props

### children (opcional)

Contenido que se organizará dentro del componente. Puede recibir cualquier nodo de React.

### as (opcional)

Si deseas cambiar el elemento que se insertará en el DOM, puedes usar la propiedad `as`.

Esta propiedad implementa la interfaz `IStackStructure`, que permite usar las siguientes opciones:

1. `"div" | "ul" | "ol"`
2. **Por defecto:** `"div"`

### wrap (opcional)

Controla si los elementos se organizan en múltiples filas/columnas.

Esta propiedad implementa la interfaz `IStackWrapControl`, que permite usar las siguientes opciones:

1. `"wrap" | "nowrap" | "wrap-reverse" | "inherit" | "initial" | "revert" | "unset"`
2. **Por defecto:** `"nowrap"`

### direction (opcional)

Define la dirección principal del layout.

Esta propiedad implementa la interfaz `IStackDirectionAlignment`, que permite usar las siguientes opciones:

1. `"row" | "column" | "row-reverse" | "column-reverse" | "inherit" | "initial" | "revert" | "unset"`
2. **Por defecto:** `"row"`

### justifyContent (opcional)

Alineación horizontal en modo fila o vertical en modo columna.

Esta propiedad implementa la interfaz `IStackJustifyContent`, que permite usar las siguientes opciones:

1. `"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right" | "inherit" | "initial" | "revert" | "unset" | "stretch" | "normal"`
2. **Por defecto:** `"flex-start"`

### alignItems (opcional)

Alineación vertical en modo fila o horizontal en modo columna.

Esta propiedad implementa la interfaz `IStackAlignItem`, que permite usar las siguientes opciones:

1. `"baseline" | "normal" | "flex-start" | "flex-end" | "center" | "stretch" | "self-start" | "self-end" | "initial" | "revert" | "unset" | "start" | "end"`
2. **Por defecto:** `"flex-start"`

### alignContent (opcional)

Alineación de líneas en contenedores flexibles con múltiples filas/columnas.

Esta propiedad implementa la interfaz `IStackAlignContent`, que permite usar las siguientes opciones:

1. `"baseline" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "inherit" | "initial" | "revert" | "unset" | "stretch" | "normal"`
2. **Por defecto:** `"flex-start"`

### gap (opcional)

Corresponde al espaciado entre elementos.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de gap en CSS.

### height (opcional)

Permite controlar la propiedad CSS `height`.

1. **Por defecto: "auto"**
2. Puedes pasar cualquier valor válido de height en CSS.

### width (opcional)

Permite controlar la propiedad CSS `width`.

1. **Por defecto: "auto"**
2. Puedes pasar cualquier valor válido de width en CSS.

### margin (opcional)

Permite controlar la propiedad CSS `margin`.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de margin en CSS.

### padding (opcional)

Permite controlar la propiedad CSS `padding`.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de padding en CSS.

## Personalización

### Tokens

Este componente no soporta tokens para personalización visual. Para modificar estilos, se recomienda usar las props de dimensiones y espaciado.
