# Assisted

Esta librería publica el componente `<Assisted />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Assisted } from "@inubekit/inubekit";
```

## Props

### step

Indica el objeto correspondiente al paso actual que se está mostrando.

### totalSteps

Esta propiedad corresponde al número total de pasos en el recorrido.

### onBackClick

Esta propiedad corresponde a una función que se llamará cuando el usuario haga clic en el botón `"Atrás"`.

### onNextClick

Esta propiedad corresponde a una función que se llamará cuando el usuario haga clic en el botón `"Siguiente"`.

### onSubmitClick

Esta propiedad corresponde a una función que se llamará cuando el usuario haga clic en el botón `"Enviar"` (en el último paso).

### disableBack (opcional)

Esta propiedad define si esta habilitado el botón `"Atrás"`. Las opciones son: `true`, `false`.

1. **Por defecto:** false.

### disableNext (opcional)

Esta propiedad define si esta habilitado el botón `"Siguiente"`. Las opciones son: `true`, `false`.

1. **Por defecto:** false.

### disableSubmit (opcional)

Esta propiedad define si esta habilitado el botón `"Enviar"`. Las opciones son: `true`, `false`.

1. **Por defecto:** false.

### showCurrentStepNumber (opcional)

Esta propiedad define la visualización del número del paso actual. Las opciones son: `true`, `false`.

1. **Por defecto:** true.

### controls (opcional)

Esta propiedad corresponde a un objeto para personalizar el texto de los botones. Puede incluir `goBackText`, `goNextText` y `submitText` para cambiar las etiquetas predeterminadas de los botones.

1. **Por defecto:**
   - **goBackText:** Prev,
   - **goNextText:** Next,
   - **submitText:** Send,

### size (opcional)

Esta propiedad define el tamaño del componente `Assisted`. Las opciones son: `small`, `large`.

1. **Por defecto:** large.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
