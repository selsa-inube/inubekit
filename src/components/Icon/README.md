# Icon

Esta librería publica el componente `<Icon />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.
- **react-icons**: Este componente se implementa utilizando [react-icons](https://react-icons.github.io/react-icons/) como una dependencia, ya que todos los íconos que se pueden renderizar deben pertenecer a esa biblioteca.

## Importación

```jsx
import { Icon } from "@inubekit/inubekit";
```

## Props

### icon

Use esta propiedad para indicar qué ícono de react-icons desea renderizar.

**Nota:** Como regla de diseño, utilice íconos solo de Material Design Icons _(md)_. odo el sistema de diseño se basa en ese conjunto de íconos.

```jsx
import { Icon } from "@inubekit/inubekit";
import { MdAdd } from "react-icons/md";

function Example() {
  return (
    <>
      <Icon icon={<MdAdd />} />
    </>
  );
}
```

### appearance (requerido)

Controla el color del ícono renderizado. Esta propiedad implementa la interfaz IIconAppearance, que asegura que solo se puedan utilizar las siguientes opciones:

`"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray" | "light"`

Cada opción tiene un valor de color predeterminado implementado y exportado desde el componente `Foundations` para ser utilizado dentro de los estilos del componente. Consulta la sección de [personalización](#personalización) para ver cómo cambiar estos valores predeterminados.

### size (opcional)

Controla el tamaño del ícono utilizando cualquier valor dimensional que necesites. Considera lo siguiente:

1. **Por defecto:**: "24px".
2. Puedes pasar cualquier cadena siempre que sea un valor válido para las propiedades CSS `width` y `height`.
3. Verás a continuación que puedes cambiar las propiedades de variante, forma y espaciado del ícono. Independientemente de esos valores, todo el ícono utilizará el tamaño que especifiques en esta propiedad (al igual que al trabajar con la propiedad CSS `box-sizing: "border-box"`).

### variant (opcional)

Los íconos pueden requerir un marco en ocasiones. Esta propiedad implementa la interfaz IIconVariant, por lo que puedes controlar ese marco con tres valores posibles:

- `"empty"` **(Por defecto)**: El ícono se renderiza solo. Solo el ícono y nada más.
- `"outlined"`: Utiliza este valor si el ícono debe estar rodeado por un borde. El borde utiliza el mismo color que el ícono.
- `"filled"`: Utiliza este valor si deseas que el ícono esté sobre un fondo sólido. En este caso, la [appearance](#appearance-requerido) que seleccionaste afectará el color de fondo y el ícono utilizará un color de contraste encima.

### shape (opcional)

Derivado de la propiedad de variante, en algunos escenarios podemos querer cambiar la forma del marco del ícono. Esta propiedad implementa la interfaz IIconShape, por lo que puedes utilizar las siguientes formas:

- `"rectangle"` **(Por defecto)**
- `"circle"`

### spacing (opcional)

Algunos íconos tienen una implementación interna que hace que el ícono esté cerca o casi toque el borde de su contenedor. Esto puede convertirse en un problema frecuente cuando implementas un marco alrededor del ícono. Para estos escenarios, la propiedad de espaciado implementa la interfaz IIconSpacing, por lo que puedes controlar el espacio entre el ícono y su contenedor de la siguiente manera

- `narrow` **(Por defecto)**: Hay un padding de "2px" entre el ícono y su contenedor.
- `compact`: Hay un padding de "4px".
- `wide`: Hay un padding de "8px".

### disabled (opcional)

Esta es una propiedad booleano para controlar si el ícono debe estar deshabilitado o no. Hay algunos valores de estilo predeterminados cuando el ícono está deshabilitado; si deseas cambiarlos, consulta la sección de [personalización](#personalización).

### onClick (opcional)

Esta propiedad recibe una función que se ejecutará cuando el usuario haga clic en el ícono (si el ícono está habilitado). La función recibirá el evento de clic como argumento al ser ejecutada.

### cursorHover (optional)

Propiedad booleano que te permite habilitar un comportamiento de hover para el ícono. Esto cambiará el cursor cuando el ícono esté en estado de hover, así como el color del ícono (y su marco si lo tiene). Su valor **por defecto** es `false`.

### parentHover (optional)

A veces, el ícono pertenece a un componente más grande y queremos cambiar la representación del ícono a un estado de hover incluso cuando el cursor está sobre el componente más grande, pero no exactamente sobre el ícono en sí.

- **Por defecto**: `false`
- Este comportamiento es común cuando ese componente más grande es una tarjeta. En ese caso, nos gustaría cambiar el ícono a su estado de hover cuando el cursor está sobre la tarjeta.
- Su uso significa que el componente padre del ícono deberá interceptar el hover sobre sí mismo y luego cambiar el valor de la propiedad `parentHover` a `true`.
- Mientras que `cursorHover` permite que el ícono intercepte el hover por sí mismo utilizando sus propias reglas CSS para eso, `parentHover` es una propiedad controlada que fuerza el comportamiento de hover en el ícono.

## Personalización

### Estructura de tokens

Los tokens para este componente siguen la estructura `business-unit.component.appearance.property.subproperty.modifier`.

### Propiedades

- **content**: se utiliza para controlar el color del ícono.
- **background**: se utiliza para controlar el fondo del ícono cuando se aplica la variante `filled`.
- **contrast**: se utiliza para controlar el color del ícono cuando se aplica la variante `filled`.

### Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)

### Cambiando tokens

Puedes cambiar la presentación del componente ajustando sus tokens. Esta modificación tiene las siguientes restricciones:

1. Debes utilizar la estructura de tokens actual, ya que el estilo del componente depende de esa estructura de datos para obtener los valores.
2. Los tokens se basan en la estructura de tokens de palette. Esto significa que la unidad de negocio debe tener ya un conjunto de colores definidos como palette, y esos colores sirven como opciones para ser asignadas aquí.

> 💡 Para ver más detalles sobre la estructura de tokens de paleta, consulta el componente **Foundations** en la librería.
