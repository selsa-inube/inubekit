# Hooks

Esta librería publica los componentes `<Hooks />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```jsx
import { useMediaQuery, useFonts, useMediaQueries } from "@inubekit/inubekit";
```

## Hooks

### useMediaQuery

Este hook ayuda a controlar la responsividad de tu aplicación reaccionando a cambios en el viewport. El uso de eventos en el navegador y su función de manejo correspondiente permite que las aplicaciones cambien el renderizado de la aplicación.

Hay algunos factores clave que hacen que este hook funcione:

- `matchMedia()` es un método que pertenece al objeto `window` en los navegadores. Recibe una cadena de media query como parámetro y devuelve un objeto `MediaQueryList`. Ver documentación en [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).
- `MediaQueryList`: es un objeto creado y devuelto por `matchMedia()` que te permite saber si la consulta que pasaste coincide con el viewport (`boolean`). Esa respuesta se obtiene llamando al método `matches()` del objeto.
- El objeto `MediaQueryList` también te permite agregar event listeners de tipo "change", para que el navegador te notifique cuando el valor de `matches()` cambie.
- Con el event listener en su lugar, el hook puede actualizar el estado del hook. Con esa actualización, puedes controlar el layout de tus pantallas.
- Ver documentación en [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) para detalles sobre `MediaQueryList`.

#### Parámetros

- **query** (requerido): String de media query CSS.

#### Retorna

- **boolean**: `true` si la media query coincide con el viewport actual, `false` en caso contrario.

### useMediaQueries

La diferencia entre este hook y `useMediaQuery` es que en lugar de pasar solo una cadena de media query para un solo breakpoint, puedes pasar un array de media queries. Internamente el hook crea un objeto `MediaQueryList` por cada media query y añade un event listener de "change" a cada uno para monitorear el cambio de cada breakpoint.

Un uso adecuado requiere que los rangos que pases como media queries (breakpoints) no se superpongan. Esto te permitirá saber exactamente el rango en el que está trabajando actualmente el viewport y así poder manejar el renderizado de la aplicación.

#### Parámetros

- **queries** (requerido): Array de strings de media queries CSS.

#### Retorna

- **object**: Objeto cuyas claves son las media queries pasadas y cuyos valores son booleanos.

### useFonts

Este hook es útil para cargar y establecer font-faces en una aplicación durante el tiempo de ejecución. Para funcionar, este hook debe hacer uso de la API FontFace del navegador.

Si quieres conocer todos los detalles sobre cómo usar este hook y cómo conectarlo con un proveedor de fuentes como Google Fonts, consulta este [artículo](https://medium.com/@wfercanas/load-fonts-on-demand-with-react-206ce12174c0).

#### Parámetros

- **fonts** (requerido): Array de objetos que contienen información de las fuentes a cargar.
  - **family**: Nombre de la familia de fuente.
  - **url**: URL de la fuente.
  - **options**: Objeto con opciones como `weight` y `style`.

#### Retorna

- **void**: Este hook no retorna valores, carga las fuentes directamente en el documento.

---

## Technical Details

### useMediaQuery

This hook helps you control the responsiveness of your application by reacting to changes in the viewport. The usage of events in the browser and its corresponding handler function allows apps to change the rendering of the application.

There are some key factors that makes this hook work:

- `matchMedia()` is a method that belongs to the `window` object in browsers. It receives a media query string as a parameter and returns a `MediaQueryList` object. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) docs.
- `MediaQueryList`: is an object created and returned by `matchMedia()` which lets you know if the query you passed matches the viewport (`boolean`). That answer is obtained by calling the `matches()` method of the object.
- The `MediaQueryList` object also lets you add event listeners of type "change" to it, so the browser lets you know when the `matches()` value changes.
- With the event listener in place, the hook can then update the hook state. With that update, you can control the layout of your screens.
- See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) docs for details about `MediaQueryList`.

#### Parameters

- **query** (required): CSS media query string.

#### Returns

- **boolean**: `true` if the media query matches the current viewport, `false` otherwise.

### useMediaQueries

The difference between this hook and `useMediaQuery` is that instead of passing just one media query string for a single breakpoint, you can pass an array of media queries. Internally the hook creates a `MediaQueryList` object per media query and adds an "onchange" event listener to each `MediaQueryList` object to monitor the change of each breakpoint.

A proper usage demands that the ranges you pass as media queries (breakpoints) are not overlapping. That will let you know exactly the range the viewport is currently working on and thus you can handle the rendering of the app.

#### Parameters

- **queries** (required): Array of CSS media query strings.

#### Returns

- **object**: Object whose keys are the media queries passed and whose values are booleans.

### useFonts

This hook is useful for loading and setting font-faces in an application during runtime. To make it work, this hook has to make use of the browser FontFace API.

If you want to know all the little details about how to use this hook and how to connect it with a fonts provider like Google Fonts check this [article](https://medium.com/@wfercanas/load-fonts-on-demand-with-react-206ce12174c0).

#### Parameters

- **fonts** (required): Array of objects containing font information to load.
  - **family**: Font family name.
  - **url**: Font URL.
  - **options**: Object with options like `weight` and `style`.

#### Returns

- **void**: This hook doesn't return values, it loads fonts directly into the document.

---

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
