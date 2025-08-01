# Td

Esta librería publica el subcomponente `Td`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { Td } from "@inubekit/inubekit";
```

## Props

### children

Contenido que se renderiza dentro del componente **Table Td**.

1. Tipo: `ReactNode`

### align (opcional)

Alinea el contenido del componente **Table Td**.

1. **Opciones:** `"center"`, `"left"`, `"right"`.
2. **Por defecto:** `"center"`.

### appearance (opcional)

Cambia la apariencia del componente **Table Td**.

1. **Opciones:** `"primary"`, `"success"`, `"warning"`, `"danger"`, `"help"`, `"dark"`, `"gray"`, `"light"`.
2. **Por defecto:** `"primary"`.

### type (opcional)

Cambia el tipo del componente **Table Td**.

1. **Opciones:** `"text"`, `"toggle"`, `"icon"`, `"custom"`.
2. **Por defecto:** `"text"`.

### checked (opcional)

Estado del toggle cuando el tipo es `"toggle"`.

1. **Tipo:** `boolean`.
2. **Opciones:** `true`, `false`.

### id (opcional)

Identificador único para el componente.

### label (opcional)

Etiqueta asociada al componente.

### onClick (opcional)

Función que se llama cuando se hace clic en el componente **Table Td**.

### onToggle (opcional)

Función que se llama cuando el componente **Table Td** es toggled.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
