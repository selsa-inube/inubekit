# Input

Esta librería publica el componente `<Date />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Date } from "@inubekit/inubekit";
```

## Props

### label (opcional)

Etiqueta que se muestra sobre el campo.

### name (opcional)

Nombre del campo de entrada, útil para formularios.

### id

Identificador único del campo de entrada.

### disabled (opcional)

Indica si el campo está deshabilitado.

1. `true | false`
2. **Por defecto: `false`**

### value (opcional)

Valor del campo.

### onChange (opcional)

Función que se ejecuta cuando cambia el valor del campo.

### required (opcional)

Indica si el campo es obligatorio.

1. `true | false`
2. **Por defecto: `false`**

### status (opcional)

Estado del campo.

1. `"valid" | "invalid" | "pending"`

### message (opcional)

Mensaje de ayuda o error que se muestra debajo del campo.

### size (opcional)

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. **Por defecto: `"wide"`**

### fullwidth (opcional)

Hace que el campo ocupe el 100% del ancho disponible.

1. `true | false`
2. **Por defecto: `false`**

### onFocus (opcional)

Función que se ejecuta cuando el campo recibe el foco.

### onBlur (opcional)

Función que se ejecuta cuando el campo pierde el foco.

### focused (opcional)

Indica si el campo está enfocado.

## Personalización

### Tokens

Este componente utiliza la definición de tokens globales para todos los tipos de input disponibles, que se encuentra en el componente input.

- Los tokens están definidos por los valores del tema global.
- Para más detalles, consulta el archivo de tokens compartido: [TOKENS.md](../Input/TOKENS.md).
