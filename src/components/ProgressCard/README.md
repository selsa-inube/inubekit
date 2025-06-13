# ProgressCard

Esta librería publica el componente `<ProgressCard />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { ProgressCard } from "@inubekit/inubekit";
```

## Props

### step

Número total de pasos en el recorrido.

### showStepIndicator (opcional)

Define si se muestra el indicador visual del paso actual.

1. **Por defecto:** true.

### showCurrentStepNumber (opcional)

Define si se muestra el número del paso actual junto con el total.

1. **Por defecto:** true.

### percentage (opcional)

Porcentaje de progreso mostrado en la barra. Si no se provee, se calcula automáticamente con base en el paso actual y el total de pasos.

### onComplete (opcional)

Función que se ejecuta cuando se alcanza el último paso.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
