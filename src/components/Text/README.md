# Text

Esta librería publica el componente `<Text />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Text } from "@inubekit/inubekit";
```

## Props

### children

Esta propiedad te permite controlar los caracteres que deseas renderizar dentro del componente. Se recomienda usar esta propiedad escribiendo los caracteres entre las etiquetas de apertura y cierre del componente.

```jsx
import { Text } from "@inubekit/inubekit";

function Ejemplo() {
  return <Text>Escribe aquí tu texto</Text>;
}
```

### appearance (opcional)

Controla el color del texto renderizado. Esta propiedad implementa la interfaz `ITextAppearance`,que garantiza que solo puedas usar las siguientes opciones:

1. `"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray" | "light"`
2. **Por defecto: "dark"**

Cada opción tiene un valor de color predeterminado implementado y exportado desde el componente `Foundations` para ser usado dentro de los estilos del componente. Consulta la sección de [personalización](#personalización) para saber cómo cambiar estos valores predeterminados.

### as (opcional)

Si deseas cambiar el elemento que se insertará en el DOM, puedes usar la propiedad `as`.

Esta propiedad implementa la interfaz `ITextHTMLElement`, que permite usar las siguientes opciones:

1. `"blockquote" | "figcaption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "legend" | "p" | "span"`.
2. **Por defecto: "p"**

### type (opcional)

Este componente implementa 5 tipos de texto, que permiten asignar diferentes roles al texto dentro de una interfaz. Las opciones posibles están implementadas a través de la interfaz `ITextType`:

1. `"display" | "headline" | "title" | "body" | "label"`
2. **Por defecto: "body"**

Consulta la sección de [personalización](#personalización) para saber cómo cambiar los valores CSS que corresponden a cada tipo.

### size (opcional)

Aunque hay 5 tipos de texto, cada tipo tiene tres variantes internas en tamaño. Esto es particularmente útil en escenarios responsivos. Las opciones posibles están implementadas a través de la interfaz `ITextSize`:

1. `"large" | "medium" | "small"`
2. **Por defecto: "large"**

Consulta la sección de [personalización](#personalización) para saber cómo cambiar los valores CSS que corresponden a cada tamaño.

### weight (opcional)

Controla la propiedad CSS `font-weight` del texto. Recibe números o cadenas compatibles con esta propiedad CSS.

1. **Por defecto: "normal"**
2. Puedes explorar el mapeo entre valores y nombres en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight#common_weight_name_mapping).
3. **IMPORTANTE:** cuando crees la tipografía para la unidad de negocio, debes proporcionar la URL para agregar el @font-face que corresponda al peso de fuente que desees usar en componentes como <Text />. Esto significa que si usted establece aquí el valor "bold" para su texto, la @font-face debería haber definido cómo crear la variante negrita para la familia de fuentes de la unidad de negocio. Si olvidas hacerlo, el navegador intentará construir la variante por sí mismo, lo que puede hacer que los caracteres se vean diferentes a lo previsto. Consulta más información en la sección de [tipografía](#tipografía).

### margin (opcional)

Permite controlar la propiedad CSS `margin`.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de margin en CSS.

### padding (opcional)

Permite controlar la propiedad CSS `padding`.

1. **Por defecto: "0px"**
2. Puedes pasar cualquier valor válido de padding en CSS.

### textAlign (opcional)

Permite controlar la propiedad CSS `text-align`.

1. **Por defecto: "start"**
2. Puedes pasar cualquier valor válido de text-align en CSS. Consulta las opciones posibles en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#values)

### ellipsis (opcional)

Propiedad booleana que permite controlar cómo manejar el texto cuando excede el contenedor principal. Implementa la propiedad CSS `text-overflow`.

1. **Por defecto: false**
2. Cuando es `false`, la propiedad CSS usará la variante "clip", truncando el texto. Consulta más en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#values)

### disabled (opcional)

Cada [appearance](#appearance-opcional) del texto puede tener un estado `disabled`. Esta propiedad booleana te permite activar o desactivar ese estado.

1. **Por defecto: false**
2. Consulta la sección de [personalización](#personalización) para más información sobre cómo ajustar el estilo deshabilitado por variante de apariencia.

### onClick (opcional)

Esta propiedad recibe una función que se ejecutará cuando el usuario haga clic en el texto (si el texto está habilitado). La función recibirá el evento de clic como argumento.

### cursorHover (opcional)

Propiedad booleana que permite habilitar un comportamiento de hover para el texto. Esto cambiará el cursor y el color cuando el texto sea hovered. Su valor **por defecto** es `false`.

### parentHover (opcional)

A veces, el texto pertenece a un componente más grande y queremos cambiar el estado del texto a hover incluso cuando el cursor está sobre el componente más grande pero no directamente sobre el texto.

- **Por defecto:** `false`
- Este comportamiento es común cuando ese componente más grande es una tarjeta. En ese caso, queremos que el texto cambie a su estado hover cuando el cursor esté sobre la tarjeta.
- Su uso significa que el componente padre del texto tendrá que interceptar el hover sobre sí mismo y luego cambiar el valor de la proposición de `parentHover` a `true`.
- En `cursorHover` vamos a interceptar el texto de hover utilizando sus propias reglas CSS. Por otro lado, `parentHover` es una prop controlada que define el comportamiento de hover en el texto.

## Personalización

### Estructura de tokens

Los tokens para este componente siguen la estructura `business-unit.component.appearance.property.subproperty.modifier`.

### Propiedades

- **content**: se utiliza para controlar el color del texto.

### Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)

### Tipografía

Por defecto, todos los componentes de inubekit utilizan "Roboto" como fuente. Si deseas cambiar esto en tu aplicación, debes completar dos pasos:

1. Instala la nueva fuente que deseas usar (si esta fuente no está preinstalada en el navegador). Esta instalación puede realizarse mediante el método convencional de agregar elementos de enlace en tu documento index.html de la aplicación (opción de compilación) o instalando dinámicamente la fuente en tiempo de ejecución. Para la segunda opción, consulta el hook useFonts() que se encuentra en el componente **Hooks**.
2. Después de instalar las fuentes, puedes utilizarlas de manera consistente en toda la aplicación. Para ello, debes editar los tokens de tipografía en la estructura de tokens del cliente, de modo que en lugar de usar "Roboto", puedas aplicar la nueva fuente. Para ver la estructura de los tokens de tipografía, puedes referirte al componente **Foundations**.

Si cambias los valores de los tokens de tipografía, el componente `<Text />` los usará automáticamente para renderizar los textos. Lo mismo ocurrirá con el resto de componentes que utilicen los tokens de tipografía en sus estilos.

```js
businessUnit = {
  typography: {
    // .. estructura definida en el componente Foundations
  },
};
```

### Cambiando tokens

Puedes cambiar la presentación del componente ajustando sus tokens. Estas modificaciones tienen las siguientes restricciones:

1. Debes usar la estructura actual de tokens, ya que el estilo del componente depende de esa estructura de datos.
2. Los tokens de color dependen de la estructura de tokens de paleta. Esto significa que la unidad de negocio debe tener un conjunto de colores definidos como paleta, y esos colores sirven como opciones para asignar aquí.

> 💡 Para ver más detalles sobre la estructura de tokens de paleta, consulta el componente **Foundations** en la librería.
