# Input

Esta librería publica el componente `<Input />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Input } from "@inubekit/inubekit";
```

## Props

### id

Identificador único del campo de entrada.

### label (opcional)

Etiqueta que se muestra sobre el campo.

### placeholder (opcional)

Texto de ayuda que se muestra dentro del campo cuando está vacío.

### value (opcional)

Valor del campo.

### onChange (opcional)

Función que se ejecuta cuando cambia el valor del campo.

### iconBefore (opcional)

Ícono o componente JSX que se muestra al inicio del campo.

### iconAfter (opcional)

Ícono o componente JSX que se muestra al final del campo.

### message (opcional)

Mensaje de ayuda o error que se muestra debajo del campo.

### status (opcional)

Estado del campo.

1. `"valid" | "invalid" | "pending"`

_No tiene valor por defecto._

### disabled (opcional)

Indica si el campo está deshabilitado.

1. `true | false`
2. **Por defecto: `false`**

### readOnly (opcional)

Indica si el campo es de solo lectura.

1. `true | false`
2. **Por defecto: `false`**

### required (opcional)

Indica si el campo es obligatorio.

1. `true | false`
2. **Por defecto: `false`**

### fullwidth (opcional)

Hace que el campo ocupe el 100% del ancho disponible.

1. `true | false`
2. **Por defecto: `false`**

### size (opcional)

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. **Por defecto: `"wide"`**

### maxLength (opcional)

Número máximo de caracteres permitidos.

_Tipo: `number`_

_No tiene valor por defecto._

### type (opcional)

Tipo de entrada.

1. `"text" | "number" | "email" | "money" | "phone" | "tel" | "search" | "password"`
2. **Por defecto: `"text"`**

## Personalización

### Tokens

Este componente contiene la definición de tokens globales para todos los tipos de input disponibles, incluyendo los componentes `Input`, `EmailField`, etc.

- Los tokens están definidos por los valores del tema global.
- Para más detalles, consulta el archivo de tokens compartido: [TOKENS.md](../TOKENS.md).
