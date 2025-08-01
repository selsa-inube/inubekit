# Tr

Esta librería publica el subcomponente `Tr`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { Tr } from "@inubekit/inubekit";
```

## Props

### children

Contenido que se renderiza dentro del componente **Tr**.

1. Tipo: `ReactNode`

### border (opcional)

Establece el borde del componente **Table Tr**.

1. **Opciones:** `"complete"`, `"top"`, `"bottom"`, `"left"`, `"right"`.
2. **Por defecto:** `"complete"`.

### borderDashed (opcional)

Si es true, establece el estilo del borde como discontinuo.

1. **Opciones:** `true`, `false`.
2. **Por defecto:** `false`.

### zebra (opcional)

Aplica un estilo de rayas zebra alternantes a las filas.

1. **Opciones:** `true`, `false`.
2. **Por defecto:** `false`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
