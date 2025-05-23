# Tag

Esta librería publica el componente `<Tag />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Tag } from "@inubekit/inubekit";
```

## Props

### appearance

Controla el color de fondo de la etiqueta. Las opciones disponibles son estilos predefinidos.

1. `"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray" | "light"`
2. **Por defecto: "No definido"**

### id (opcional)

Identificador único para el componente de etiqueta.

### label

Controla el texto que se mostrará en la etiqueta.

### removable (opcional)

Determina si la etiqueta puede ser eliminada. Cuando es true, se muestra un icono de cierre.

1. **Por defecto: false**

### displayIcon (opcional)

Determina si la etiqueta debe estar acompañada de un icono.

1. **Por defecto: true**

### icon (opcional)

Corresponde al ícono que se desea mostrar en el componente.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
