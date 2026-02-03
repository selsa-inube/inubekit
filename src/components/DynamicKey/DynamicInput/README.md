# DynamicInput

Esta librería publica el componente `<DynamicInput />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { DynamicInput } from "@inubekit/inubekit";
```

## Props

### placeholder (opcional)

Texto de marcador de posición que se muestra en el campo.

### masked (opcional)

Indica si el contenido se muestra como asteriscos.

1. `true | false`
2. **Por defecto: `false`**

### type (opcional)

Tipo de validación de entrada.

1. `"numeric" | "alphanumeric"`
2. `"numeric"`: Solo acepta números
3. `"alphanumeric"`: Acepta letras y números (se transforman automáticamente a mayúsculas)
4. **Por defecto: `"numeric"`**

### size (opcional)

Controla el tamaño del campo de entrada.

1. `"wide" | "compact"`
2. `"compact"`: 40x40px
3. `"wide"`: 48x48px
4. **Por defecto: `"wide"`**

### onChange (opcional)

Función que se ejecuta cuando cambia el valor del campo.

```tsx
onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
```

### onKeyDown (opcional)

Función que se ejecuta cuando se presiona una tecla en el campo.

```tsx
onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
```

## Personalización

### Tokens

Este componente utiliza los tokens del componente Input para mantener consistencia visual.

- Los tokens están definidos por los valores del tema global.
- Para más detalles, consulta el archivo de tokens compartido: [TOKENS.md](../../Input/TOKENS.md).
