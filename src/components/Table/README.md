# Table

Esta librería publica el componente `<Table />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Table } from "@inubekit/inubekit";
```

## Props

### children

El contenido a mostrar dentro de la tabla. Típicamente incluye una combinación de los subcomponentes disponibles.

### tableLayout (opcional)

Especifica el algoritmo de diseño a utilizar para la tabla.

1. **Opciones:** `"auto"`, `"fixed"`.
2. **Por defecto:** `"fixed"`.

### borderCollapse (opcional)

Controla el comportamiento de colapso de bordes de la tabla.

1. **Opciones:** `"collapse"`, `"separate"`.
2. **Por defecto:** `"collapse"`.

### borderWidth (opcional)

Define el ancho del borde de la tabla.

1. **Tipo:** `string`.
2. **Por defecto:** `1px`.

### borderStyle (opcional)

Define el estilo del borde de la tabla.

1. **Opciones:** : `"solid"`, `"dashed"`.
2. **Por defecto:** `solid`.

## Subcomponentes

El sistema de tabla está compuesto por los siguientes subcomponentes especializados:

- **[Thead](./Thead/README.md)**: Encabezado de la tabla
- **[Tbody](./Tbody/README.md)**: Cuerpo principal de la tabla
- **[Tfoot](./Tfoot/README.md)**: Pie de la tabla
- **[Tr](./Tr/README.md)**: Fila de la tabla
- **[Th](./Th/README.md)**: Celda de encabezado
- **[Td](./Td/README.md)**: Celda de datos
- **[Caption](./Caption/README.md)**: Título descriptivo de la tabla
- **[Colgroup](./Colgroup/README.md)**: Grupo de columnas
- **[Col](./Col/README.md)**: Definición de columna
- **[Pagination](./Pagination/README.md)**: Componente de paginación para la tabla

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
