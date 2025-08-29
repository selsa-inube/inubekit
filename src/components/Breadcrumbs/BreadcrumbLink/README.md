# BreadcrumbLink

Esta librería publica el subcomponente `BreadcrumbLink`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { BreadcrumbLink } from "@inubekit/inubekit";
```

## Props

### label

Constituye el contenido que se mostrará en el enlace.

1. **Tipo:** `string`

### path

Ruta de destino para la navegación.

1. **Tipo:** `string`

### id

Identificador único para el elemento.

1. **Tipo:** `string`

### size (opcional)

Tamaño del enlace de breadcrumb.

1. **Opciones:** `"large"`, `"small"`.
2. **Por defecto:** `"large"`.

### active (opcional)

Indica si el enlace está activo (página actual).

1. **Opciones:** `true`, `false`.
2. **Por defecto:** `false`.

### onClick (opcional)

Función que determina el comportamiento del evento de clic.

1. **Tipo:** `(e: React.MouseEvent) => void`

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
