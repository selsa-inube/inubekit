# BreadcrumbMenuLink

Esta librería publica el subcomponente `BreadcrumbMenuLink`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { BreadcrumbMenuLink } from "@inubekit/inubekit";
```

## Props

### label

Constituye el contenido que se mostrará en el enlace del menú.

1. **Tipo:** `string`

### path

Es la ruta hacia donde va a navegar el BreadcrumbMenuLink.

1. **Tipo:** `string`

### id

Identificador único para el elemento.

1. **Tipo:** `string`

### size (opcional)

Indica el tamaño de fuente utilizado en el componente.

1. **Opciones:** `"large"`, `"medium"`, `"small"`.
2. **Por defecto:** `"large"`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
