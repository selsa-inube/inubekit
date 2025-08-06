# Toggle

Esta librería publica el componente `<Toggle />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Toggle } from "@inubekit/inubekit";
```

## Props

### onChange

Función que se ejecuta cuando el estado del toggle cambia.

### checked (opcional)

Define si el toggle está en estado habilitado (activado) o deshabilitado (desactivado).

1. Tipo: `boolean`.
2. Opciones: `true`, `false`.
3. **Por defecto:** `false`.

### disabled (opcional)

Desactiva el toggle cuando se establece en true, impidiendo la interacción del usuario.

1. Tipo: `boolean`.
2. Opciones: `true`, `false`.
3. **Por defecto:** `false`.

### size (opcional)

Define el tamaño del toggle.

1. Opciones: `"small"`, `"large"`.
1. **Por defecto:** `"large"`.

### id (opcional)

El identificador único para el toggle. Permite conectar el toggle con una etiqueta.

### name (opcional)

El nombre del toggle, utilizado cuando se envía el valor como parte de un formulario.

### value (opcional)

El valor que se enviará en un formulario cuando el toggle esté marcado.

### children (opcional)

Texto o elementos que se mostrarán junto al toggle.

### margin (opcional)

Establece el margen exterior del toggle en px o valores de espaciado globales. Acepta tokens de espaciado.

1. **Por defecto:** `0px`.

### padding (opcional)

Establece el relleno interior del toggle en px o valores de espaciado globales. Acepta tokens de espaciado.

1. **Por defecto:** `0px`.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
