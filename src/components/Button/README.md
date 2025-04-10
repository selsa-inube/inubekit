# Button

Este componente representa un botón reutilizable que admite estilos personalizados, íconos y un spinner de carga. Se puede renderizar como un botón clásico o como un enlace.

## Instalación

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.
- **react-router-dom**: se requiere si usas el tipo `link`.

## Importación

```tsx
import { Button } from "@inubekit/inubekit";
```

## Props

### children

Texto a mostrar en el botón.

1. Tipo: `string`

### loading

Muestra un spinner y oculta el contenido si es `true`.

1. Tipo: `boolean`
2. **Por defecto: `false`**

### appearance

Estilo base del botón.

1. Opciones: `"primary"`, `"success"`, `"warning"`, `"danger"`, `"help"`, `"dark"`, `"gray"`, `"light"`
2. **Por defecto: `"primary"`**

### disabled

Desactiva el botón.

1. Tipo: `boolean`
2. **Por defecto: `false`**

### iconBefore

Ícono que se muestra antes del texto del botón.

1. Tipo: `string`

### iconAfter

Ícono que se muestra después del texto del botón.

1. Tipo: `string`

### type

Tipo de botón.

1. Opciones: `"button"`, `"submit"`, `"reset"`, `"link"`
2. **Por defecto: `"button"`**

### spacing

Controla el espaciado interno del botón.

1. Opciones: `"wide"` | `"compact"`
2. **Por defecto: `"wide"`**

### variant

Define la variante de estilo del botón.

1. Opciones: `"filled"` | `"outlined"` | `"none"`
2. **Por defecto: `"filled"`**

### fullwidth

Atributo que define si el botón ocupa todo el ancho del contenedor.

1. Tipo: `boolean`
2. **Por defecto: `false`**

### onClick

Función que se ejecuta cuando el usuario hace clic sobre el botón.

1. Tipo: `function`

### path

Ruta a la que se navega cuando `type` es `"link"`.

1. Tipo: `string`

### cursorHover

Aplica estilos si el cursor está sobre el botón.

1. Tipo: `boolean`
2. **Por defecto: `false`**

### parentHover

Aplica estilos si el cursor está sobre el contenedor padre del botón.

1. Tipo: `boolean`
2. **Por defecto: `false`**

## Comportamiento

- Si `loading` es `true`, se muestra un spinner y se oculta el contenido.
- Si `type` es `"link"` y no se provee `path`, se lanza una advertencia.
- La apariencia se adapta según el `variant` y `appearance` proporcionados.
- El ícono y texto cambian de estilo si se activa el estado `hover` desde el padre.

## Personalización

Este componente usa tokens definidos por tema (`styled-components ThemeContext`). Puedes personalizar su apariencia globalmente a través del `ThemeProvider`.

## Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)
