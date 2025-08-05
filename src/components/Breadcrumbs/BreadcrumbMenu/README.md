# BreadcrumbMenu

Esta librería publica el subcomponente `BreadcrumbMenu`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { BreadcrumbMenu } from "@inubekit/inubekit";
```

## Props

### routes

Las rutas que el componente breadcrumb utilizará para mostrar, y por lo tanto, puede emplearse para localizar la fuente de breadcrumbLinks presentes dentro de este componente.

1. **Tipo:** `IBreadcrumbRoute[]`

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
