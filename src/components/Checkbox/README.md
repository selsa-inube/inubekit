# Checkbox

Esta librería publica el componente `<Checkbox />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Checkbox } from "@inubekit/inubekit";
```

## Props

### id (opcional)

Controla el identificador único del Checkbox, utilizado para vincular el label y el input.

### name (opcional)

Especifica un nombre descriptivo para el Checkbox, utilizado en las presentaciones de formularios.

### value

Establece el valor que se enviará cuando el Checkbox esté seleccionado.

### checked (opcional)

Indica si el Checkbox está actualmente seleccionado.

1. **Por defecto:**: false.

### indeterminate (opcional)

Indica si el Checkbox está en un estado indeterminado.

1. **Por defecto:**: false.

### label (opcional)

Establece el texto del label que se mostrará junto al Checkbox.

### disabled (opcional)

Desactiva el Checkbox, impidiendo la interacción del usuario.

1. **Por defecto:**: false.

### required (opcional)

Marca el Checkbox como obligatorio, indicando que el usuario debe seleccionar esta opción para continuar.

1. **Por defecto:**: false.

### onChange

Una función que se llamará cada vez que cambie el estado del Checkbox.

## Personalización

### Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)

### Cambiando tokens

Puedes cambiar la presentación del componente ajustando sus tokens. Esta modificación tiene las siguientes restricciones:

1. Debes utilizar la estructura de tokens actual, ya que el estilo del componente depende de esa estructura de datos para obtener los valores.
2. Los tokens se basan en la estructura de tokens de palette. Esto significa que la unidad de negocio debe tener ya un conjunto de colores definidos como palette, y esos colores sirven como opciones para ser asignadas aquí.

> 💡 Para ver más detalles sobre la estructura de tokens de paleta, consulta el componente **Foundations** en la librería.
