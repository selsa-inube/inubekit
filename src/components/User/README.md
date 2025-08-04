# User

Esta librería publica el componente `<User />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { User } from "@inubekit/inubekit";
```

## Props

### username

Especifica el nombre del usuario que se mostrará en el componente. Permite personalizar la identificación visual del usuario dentro de la interfaz de la aplicación.

### menu

Un array de secciones que contienen enlaces o acciones para el menú del usuario. Cada sección puede tener un título, enlaces, acciones y un divisor.

### client (opcional)

Indica el nombre del cliente o empresa asociada con el usuario.

1. Tipo: `string`

### size (opcional)

Determina el tamaño del componente de usuario en la interfaz. El avatar siempre estará visible, pero el nombre y cliente serán visibles según el tamaño del componente.

1. Opciones: `"small"`, `"large"`.
2. **Por defecto:** `"large"`.

### padding (opcional)

Define el espaciado interno del componente.

1. Tipo: `string`

### margin (opcional)

Define el espaciado externo del componente.

1. Tipo: `string`

### menuTopPosition (opcional)

Establece la posición superior del menú desplegable.

1. Tipo: `string`
2. **Por defecto:** `"100%"`.

### menuRightPosition (opcional)

Establece la posición derecha del menú desplegable.

1. Tipo: `string`
2. **Por defecto:** `"16px"`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
