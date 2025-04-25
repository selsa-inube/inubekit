# Checkpicker

Esta librería publica el componente `<Checkpicker />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Checkpicker } from "@inubekit/inubekit";
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

Texto que aparece sobre el campo de selección, proporcionando contexto al usuario sobre lo que debe elegir.

### maxItems (opcional)

Número máximo de opciones visibles antes de mostrar scroll.

1. **Por defecto: 5**

### message (opcional)

Mensaje de error que aparece cuando `invalid=true`.

### name

Nombre único del campo, útil para identificarlo dentro de formularios.

### onChange

Función que se ejecuta cuando el usuario selecciona o deselecciona una opción.

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

### values

Valores seleccionados actualmente.

## Personalización

### Tokens

- Este componente no soporta tokens para la definición del color del checkpicker y utiliza los estilos del componente `<Input>` [TOKENS.md](../Input/TOKENS.md).
