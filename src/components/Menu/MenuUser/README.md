# MenuUser

Esta librería publica el subcomponente `<MenuUser />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto.

## Importación

```tsx
import { MenuUser } from "@inubekit/inubekit";
```

## Props

### userName

Nombre del usuario a mostrar.

1. Tipo: `string`

### businessUnit (opcional)

Unidad de negocio o empresa del usuario. Se muestra debajo del nombre con un estilo secundario.

1. Tipo: `string`

### avatar

Controla si se muestra un avatar junto a la información del usuario.

1. Tipo: `boolean`
2. **Por defecto: `true`**

### padding

Espaciado interno del componente.

1. Tipo: `string`
2. **Por defecto:** `"12px 16px"`

### gap

Espaciado entre el avatar y la información del usuario.

1. Tipo: `string`
2. **Por defecto:** `"12px"`

## Personalización

### Tokens

Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
