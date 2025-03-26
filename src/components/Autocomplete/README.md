# Autocomplete

Esta librería publica el componente `<Autocomplete />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Autocomplete } from "@inubekit/inubekit";
```

## Props

### value

Define el valor actual del campo de texto.

### onChange

Función que se ejecuta cuando el usuario selecciona una opción o escribe en el campo.

### options

Lista de opciones disponibles para el autocompletado.

### label

Texto que aparece sobre el campo de entrada, proporcionando contexto al usuario sobre lo que debe ingresar.

### name

Nombre único del campo, útil para identificarlo dentro de formularios.

### id

Identificador único del campo.

### placeholder

Texto que aparece dentro del campo cuando está vacío.

### disabled

Atributo que permite habilitar/deshabilitar el campo.

1. **Por defecto: false**

### required

Atributo que marca el campo como obligatorio.

1. **Por defecto: false**

### size

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. **Por defecto: "wide"**

### fullwidth

Atributo que define si el campo ocupa todo el ancho del contenedor.

1. **Por defecto: false**

### onFocus

Función que se ejecuta cuando el usuario enfoca el campo de entrada.

### onBlur

Función que se ejecuta cuando el usuario pierde el enfoque del campo de entrada.

## Personalización

El componente hereda estilos del componente `<Select>`.
