# Tabs

Esta librería publica el componente `<Tabs />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Tabs } from "@inubekit/inubekit";
```

## Props

### tabs

Corresponde a un array de objetos, donde cada uno sigue la estructura de ITab [README.md](./Tab/README.md).

### selectedTab

Identificador de la pestaña actualmente seleccionada.

### onChange

Función que determina la acción al cambiar de pestaña.

### scroll (opcional)

Habilita el desplazamiento horizontal con flechas de navegación.

1. **Por defecto: false**

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
