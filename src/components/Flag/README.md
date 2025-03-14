# Flag

Esta librería publica el hook `useFlag`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { useFlag } from "@inubekit/inubekit";
```

## Uso

Se recomienda crear una constante para agrupar el hook y, luego, asignarle el objeto con las props correspondientes al flag.

```jsx
const { addFlag } = useFlag();

addFlag({
  title: "Título asignado",
  description: "Descripción asignada",
  appearance: "danger",
  duration: 5000,
});
```

## Props

### title

Corresponde al título de la flag. Debe ser una cadena (string).

### description

Corresponde a la descripción de la flag. Debe ser una cadena (string).

### appearance

Corresponde a la apariencia de la flag. Puede ser una de las siguientes opciones:

1. `"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray"`

### duration

Corresponde a la duración en milisegundos para la barra de cuenta regresiva. Si no se proporciona, no se mostrará la barra de cuenta regresiva. Debe ser un número (number).

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
