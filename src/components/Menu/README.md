# Menu

Esta librería publica el componente `<Menu />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.
- **react-router-dom**: se requiere si usas el tipo `link` en algunos subcomponentes.

## Importación

```tsx
import { Menu } from "@inubekit/inubekit";
```

## Props

### children

Contenido del menú. Típicamente incluye una combinación de los subcomponentes disponibles.

1. Tipo: `ReactNode`

### width

Ancho del contenedor del menú.

1. Tipo: `string`
2. **Por defecto: `"fit-content"`**

## Subcomponentes

El sistema de menú está compuesto por los siguientes subcomponentes especializados:

- **[MenuUser](./MenuUser/README.md)**: Muestra información del usuario con avatar opcional
- **[MenuSection](./MenuSection/README.md)**: Agrupa elementos del menú en secciones categorizadas
- **[MenuItem](./MenuItem/README.md)**: Elemento básico del menú para mostrar información
- **[MenuLink](./MenuLink/README.md)**: Elemento de menú que funciona como enlace de navegación
- **[MenuAction](./MenuAction/README.md)**: Elemento de menú que ejecuta una acción al hacer clic
- **[MenuHeading](./MenuHeading/README.md)**: Encabezados para organizar visualmente las secciones

## Personalización

### Tokens

Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
