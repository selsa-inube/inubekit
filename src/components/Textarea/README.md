# Textarea

Esta librería publica el componente `<Textarea />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Textarea } from "@inubekit/inubekit";
```

## Props

### label (opcional)

Etiqueta que indica al usuario qué valor debe ingresar.

### name (opcional)

Nombre del elemento Textarea.

### id

Identificador único del componente. Permite conectar el label con el Textarea mediante el atributo `htmlFor`.

### placeholder (opcional)

Texto temporal que se muestra cuando el campo está vacío.

### disabled (opcional)

Desactiva la interacción con el componente. Considera lo siguiente:

1. **Por defecto:** `false`

### value (opcional)

Valor inicial del componente.

### onChange (opcional)

Función que se ejecuta cuando el usuario modifica el valor.

### maxLength (opcional)

Límite máximo de caracteres permitidos.

### required (opcional)

Indica si el campo es obligatorio. Considera lo siguiente:

1. **Por defecto:** `false`

### status (opcional)

Estado visual del componente. Considera lo siguiente:

1. **Opciones disponibles:** `"invalid"`, `"pending"`
2. **Por defecto:** `"pending"`

### message (opcional)

Mensaje personalizado para mostrar feedback (errores, validaciones, etc).

### fullwidth (opcional)

Hace que el componente ocupe el 100% del ancho disponible. Considera lo siguiente:

1. **Por defecto:** `false`

### lengthThreshold (opcional)

Umbral mínimo de caracteres para mostrar contadores de longitud.

## Personalización

### Tokens

- Este componente no soporta tokens para la definición del componente.
