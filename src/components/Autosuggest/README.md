# Autosuggest

Esta librería publica el componente `<Autosuggest />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Autosuggest } from "@inubekit/inubekit";
```

## Props

## Personalización

### label (opcional)

Etiqueta descriptiva para el campo de entrada.

### name

Nombre único del campo (atributo name).

### id (opcional)

Identificador único del campo (atributo id).

### placeholder (opcional)

Texto de placeholder para el campo de entrada.

### disabled (opcional)

Deshabilita el campo de entrada.

1. **Por defecto: false**

### required (opcional)

Indica si el campo es obligatorio.

1. **Por defecto: false**

### status (opcional)

Estado de validación del campo.

1. `"invalid" | "pending"`

### message (opcional)

Mensaje de estado que aparece bajo el campo.

### size (opcional)

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. **Por defecto: "wide"**

### fullwidth (opcional)

Hace que el campo ocupe el ancho completo del contenedor.

1. **Por defecto: false**

### options

Lista de opciones para mostrar en el dropdown de sugerencias.

### onOptionSelect

Función que se ejecuta cuando se selecciona una opción.

### value

Valor actual del campo de entrada.

### onFocus (opcional)

Maneja el evento de focus en el campo.

### onBlur (opcional)

Maneja el evento de blur del campo.

### Tokens

- Este componente no soporta tokens para la definición del color del select y utiliza los estilos del componente `<Input>` [TOKENS.md](../Input/TOKENS.md).
