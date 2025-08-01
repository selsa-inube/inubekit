# Breadcrumbs

Esta librería publica el componente `<Breadcrumbs />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Breadcrumbs } from "@inubekit/inubekit";
```

## Props

### crumbs

Un array de objetos que contienen las propiedades path, label, id e isActive para cada elemento de navegación.

1. **Tipo:** `IBreadcrumbsRoute[]`

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

## Subcomponentes

El sistema de breadcrumbs está compuesto por los siguientes subcomponentes especializados:

- **[BreadcrumbLink](./BreadcrumbLink/README.md)**: Enlace individual de navegación
- **[BreadcrumbEllipsis](./BreadcrumbEllipsis/README.md)**: Indicador de elementos colapsados con menú desplegable
- **[BreadcrumbMenu](./BreadcrumbMenu/README.md)**: Menú desplegable para rutas colapsadas
- **[BreadcrumbMenuLink](./BreadcrumbMenuLink/README.md)**: Enlace dentro del menú desplegable

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
