# BreadcrumbEllipsis

Esta librería publica el subcomponente `BreadcrumbEllipsis`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { BreadcrumbEllipsis } from "@inubekit/inubekit";
```

## Props

### routes

Las rutas que el componente breadcrumb utilizará para mostrar, y por lo tanto, puede emplearse para localizar la fuente de breadcrumbLinks presentes dentro de este componente.

1. **Tipo:** `IBreadcrumbsRoute[]`

### size (opcional)

Indica el tamaño de fuente utilizado en el componente.

1. **Opciones:** `"large"`, `"small"`.
2. **Por defecto:** `"large"`.

## Interfaces

```tsx
const sizes = ["large", "small"] as const;
type IBreadcrumbsSize = (typeof sizes)[number];

interface IBreadcrumbsRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: IBreadcrumbsSize;
}

interface IBreadcrumbsRoutes {
  routes: IBreadcrumbsRoute[];
}
```

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
