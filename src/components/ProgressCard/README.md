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

### displayStep (opcional)

Define si se muestra el indicador visual del paso actual.

1. **Por defecto:** true.

### countSteps (opcional)

Define si se muestra el número del paso actual junto con el total.

1. **Por defecto:** true.

### progress (opcional)

Porcentaje de progreso mostrado en la barra. Si no se provee, se calcula automáticamente con base en el paso actual y el total de pasos.

### animated (opcional)

Si es verdadero, agrega una animación brillante para indicar actividad cuando el progreso está atascado.

1. Tipo: `boolean`.
2. **Por defecto:** true.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
