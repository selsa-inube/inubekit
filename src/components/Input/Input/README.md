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

Estado del campo: `"valid"`, `"invalid"` o `"pending"`.

### disabled (opcional)

Indica si el campo está deshabilitado.

### readOnly (opcional)

Indica si el campo es de solo lectura.

### required (opcional)

Indica si el campo es obligatorio.

### fullwidth (opcional)

Hace que el campo ocupe el 100% del ancho disponible.

### size (opcional)

Tamaño del campo: `"compact"` o `"wide"`.

### counter (opcional)

Muestra un contador de caracteres.

### maxLength (opcional)

Número máximo de caracteres permitidos.

### type (opcional)

Tipo de entrada: `"text"` (por defecto), `"number"`, `"email"`, `"money"`, `"phone"`, `"search"`.

## Personalización

### Tokens

- Este componente define sus tokens de color, tamaño y espaciado por los valores definidos en el tema.
- Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
