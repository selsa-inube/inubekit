# DynamicKey

Esta librería publica el componente `<DynamicKey />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { DynamicKey } from "@inubekit/inubekit";
```

## Props

### id (opcional)

Identificador único del componente. Si no se proporciona, se genera automáticamente.

### length (opcional)

Número de campos de entrada que se mostrarán.

1. **Por defecto: `6`**

### masked (opcional)

Indica si el contenido se muestra como asteriscos en todos los campos.

1. `true | false`
2. **Por defecto: `false`**

### type (opcional)

Tipo de validación de entrada para todos los campos.

1. `"numeric" | "alphanumeric"`
2. `"numeric"`: Solo acepta números
3. `"alphanumeric"`: Acepta letras y números (se transforman automáticamente a mayúsculas)
4. **Por defecto: `"numeric"`**

### size (opcional)

Controla el tamaño de los campos de entrada.

1. `"wide" | "compact"`
2. `"compact"`: 40x40px por campo
3. `"wide"`: 48x48px por campo
4. **Por defecto: `"wide"`**

### onChange (opcional)

Función que se ejecuta cuando cambia el valor de cualquier campo.

```tsx
onChange?: (value: string) => void
```

Recibe el valor completo concatenado de todos los campos.

### onComplete (opcional)

Función que se ejecuta cuando todos los campos están completos.

```tsx
onComplete?: (value: string) => void
```

Recibe el valor completo concatenado una vez que todos los campos tienen un valor.

## Personalización

### Tokens

Este componente utiliza los tokens del componente Input para mantener consistencia visual.

- Los tokens están definidos por los valores del tema global.
- Para más detalles, consulta el archivo de tokens compartido: [../Input/TOKENS.md](../Input/TOKENS.md).
