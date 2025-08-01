# Th

Esta librería publica el subcomponente `Th`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { Th } from "@inubekit/inubekit";
```

## Props

### children

Contenido que se renderiza dentro del componente **Table Th**.

1. Tipo: `ReactNode`

### action (opcional)

Utiliza esta prop para agregar una acción al componente **Table Th**.

1. **Opciones:** `true`, `false`.
2. **Por defecto:** `false`.

### align (opcional)

Alinea el contenido del componente **Table Th**.

1. **Opciones:** `"center"`, `"left"`, `"right"`.
1. **Por defecto:** `"center"`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
