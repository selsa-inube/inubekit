# Header

Esta librería publica el componente `<Header />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Header } from "@inubekit/inubekit";
```

## Props

### logoURL

Componente JSX que representa el logo de la aplicación. Puede ser una imagen, icono o texto estilizado.

### navigation (opcional)

Configuración para el menú de navegación FullscreenNav.

### user (opcional)

Configuración para el componente de User.

### links (opcional)

Lista de enlaces de navegación.

### menu

Arreglo de opciones del menú de usuario (requerido si se usa user).

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
