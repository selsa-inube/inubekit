# Label

Esta librería publica el componente `<Label />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Label } from "@inubekit/inubekit";
```

## Props

### children (opcional)

Contenido de texto que se mostrarán dentro del label.

### disabled (opcional)

Indica si el texto está en estado deshabilitado.

1. `true | false`
2. **Por defecto: `false`**

### focused (opcional)

Indica si el texto está en estado enfocado.

1. `true | false`
2. **Por defecto: `false`**

### htmlFor (opcional)

Asocia el label con el identificador (id) de un elemento de formulario.

### invalid (opcional)

Indica si el label está en un estado inválido o de error.

1. `true | false`
2. **Por defecto: `false`**

### margin (opcional)

Define el margen alrededor del componente. Puede ser un valor en píxeles o un token global.

### padding (opcional)

Define el relleno interno del componente. Puede ser un valor en píxeles o un token global.

### size (opcional)

Controla el tamaño de la fuente del label.

1. `"large" | "medium" | "small"`
2. **Por defecto: `"medium"`**

### ellipsis (opcional)

Evita que el texto se desborde, mostrando puntos suspensivos (...) cuando el contenido es demasiado largo.

1. `true | false`
2. **Por defecto: `false`**

## Personalización

### Tokens

- Los tokens están definidos por los valores del tema global.
- Para más detalles, consulta el archivo de tokens compartido: [TOKENS.md](./TOKENS.md).
