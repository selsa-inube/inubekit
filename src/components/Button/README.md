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

| Prop          | Tipo                  | Descripción                                       |
| ------------- | --------------------- | ------------------------------------------------- | -------------------------------------------------- | --------------------------------------- |
| `children`    | `React.ReactNode`     | Contenido del botón.                              |
| `appearance`  | `"primary"            | "secondary"`                                      | Define el estilo visual. Por defecto: `"primary"`. |
| `loading`     | `boolean`             | Muestra un spinner. Por defecto: `false`.         |
| `disabled`    | `boolean`             | Desactiva el botón. Por defecto: `false`.         |
| `iconBefore`  | `React.ReactElement`  | Ícono antes del texto.                            |
| `iconAfter`   | `React.ReactElement`  | Ícono después del texto.                          |
| `type`        | `"button"             | "submit"                                          | "link"`                                            | Tipo de botón. Por defecto: `"button"`. |
| `spacing`     | `"compact"            | "wide"`                                           | Espaciado interno. Por defecto: `"wide"`.          |
| `variant`     | `"filled"             | "outlined"`                                       | Variante visual. Por defecto: `"filled"`.          |
| `width`       | `string`              | Ancho personalizado (ej. `"100%"`).               |
| `fullwidth`   | `boolean`             | Hace que el botón ocupe todo el ancho disponible. |
| `onClick`     | `(e?: Event) => void` | Función llamada al hacer clic.                    |
| `path`        | `string`              | Ruta para botones tipo `link`.                    |
| `cursorHover` | `boolean`             | Cambia comportamiento del cursor.                 |
| `parentHover` | `boolean`             | Permite que el padre controle el estado hover.    |

## Comportamiento

- Si `loading` es `true`, se muestra un spinner y se oculta el contenido.
- Si `type` es `"link"` y no se provee `path`, se lanza una advertencia.
- La apariencia se adapta según el `variant` y `appearance` proporcionados.
- El ícono y texto cambian de estilo si se activa el estado `hover` desde el padre.

## Personalización

Este componente usa tokens definidos por tema (`styled-components ThemeContext`). Puedes personalizar su apariencia globalmente a través del `ThemeProvider`.

## Tokens

Puedes consultar la lista de tokens en [TOKENS.md](./TOKENS.md)
