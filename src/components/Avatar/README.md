# Avatar

Esta librería publica el componente `<Avatar />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Avatar } from "@inubekit/inubekit";
```

## Props

### onClick (opcional)

Esta propiedad recibe una función que se ejecutará cuando el usuario haga clic en el componente. La función recibirá el evento de clic como argumento al ejecutarse.

## Personalización

### Tokens

- Este componente no soporta tokens.
- El componente implementa `<Icon />` y su apariencia coincidirá con lo que la unidad de negocio define como un ícono primario. Para más información, consulta el componente [Icon](../Icon/README.md).
