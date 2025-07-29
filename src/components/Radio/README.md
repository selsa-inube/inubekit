# Radio

Esta librería publica el componente `<Radio />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Radio } from "@inubekit/inubekit";
```

## Props

### id

Identificador único para el Radio. Este ID vincula el input con la etiqueta, asegurando que la etiqueta sea clickeable y accesible.

### onChange

Función callback que se ejecuta cuando cambia el estado del Radio (cuando el usuario selecciona o deselecciona el Radio).

### value

El valor del atributo value del Radio. Este valor se envía con los datos del formulario cuando el Radio está seleccionado.

### checked (opcional)

Indica si el Radio está actualmente seleccionado. Si es verdadero, el Radio aparecerá marcado.

1. Tipo: `Boolean`.
2. **Por defecto:** `false`.

### disabled (opcional)

Deshabilita el Radio, impidiendo cualquier interacción del usuario. Si es verdadero, el Radio aparecerá en gris y no será interactivo.

1. Tipo: `Boolean`.
2. **Por defecto:** `false`.

### label (opcional)

La etiqueta de texto que se muestra junto al Radio. Esta etiqueta proporciona una descripción de la opción que representa el Radio.

1. Tipo: `string`.

### name (opcional)

El atributo name agrupa los Radios juntos. Los Radios con el mismo nombre forman un grupo donde solo se puede seleccionar una opción.

1. Tipo: `string`.

### required (opcional)

Marca el Radio como obligatorio en el envío de formularios. Si es verdadero, el usuario debe seleccionar esta opción para proceder con el formulario.

1. Tipo: `Boolean`.
1. **Por defecto:** `false`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
