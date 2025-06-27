# Select

Esta librería publica el componente `<Select />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Select } from "@inubekit/inubekit";
```

## Props

### disabled (opcional)

Indica si el componente está deshabilitado.

1. **Por defecto: false**

### fullwidth (opcional)

Atributo que define si el campo ocupa todo el ancho del contenedor.

1. **Por defecto: false**

### id (opcional)

Identificador único del campo.

### invalid (opcional)

Indica estado de error en el campo.

1. **Por defecto: false**

### label (opcional)

Texto que aparece sobre el campo de entrada, proporcionando contexto al usuario sobre lo que debe ingresar.

### maxItems (opcional)

Número máximo de opciones visibles antes de mostrar scroll.

1. **Por defecto: 5**

### message (opcional)

Mensaje de error que aparece cuando `invalid=true`.

### name

Nombre único del campo, útil para identificarlo dentro de formularios.

### onBlur (opcional)

Función que se ejecuta cuando el usuario pierde el enfoque del campo de entrada.

### onChange

Función que se ejecuta cuando el usuario selecciona una opción.

### onClick (opcional)

Función que se ejecuta al hacer clic en el componente.

### onFocus (opcional)

Función que se ejecuta cuando el usuario enfoca el campo de entrada.

### onKeyUp (opcional)

Función que se ejecuta al liberar una tecla.

### options

Lista de opciones disponibles para la selección.

### placeholder (opcional)

Texto de ayuda inicial cuando no hay valor seleccionado.

### required (opcional)

Atributo que marca el campo como obligatorio.

1. **Por defecto: false**

### size (opcional)

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. **Por defecto: "wide"**

### value

Valor actual del campo.

### showOptions (opcional)

Controla la visibilidad del menú desplegable.

1. **Por defecto: false**

### picker (opcional)

Habilita modo de selección múltiple.

1. **Por defecto: false**

### showChevron (opcional)

Controla la visibilidad del icono chevron.

1. **Por defecto: true**

### clearable

Controla si el usuario puede borrar el valor seleccionado en el componente. Cuando está en `true`, se muestra un botón para restablecer la selección; de lo contrario, aparece una opción en blanco entre las opciones.

1. **Por defecto: true**

## Personalización

### Tokens

- Este componente no soporta tokens para la definición del color del select y utiliza los estilos del componente `<Input>` [TOKENS.md](../Input/TOKENS.md).
