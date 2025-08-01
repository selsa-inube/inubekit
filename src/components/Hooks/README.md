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

#### Parámetros

- **query** (requerido): String de media query CSS.

#### Retorna

- **boolean**: `true` si la media query coincide con el viewport actual, `false` en caso contrario.

### useMediaQueries

La diferencia entre este hook y `useMediaQuery` es que en lugar de pasar solo una cadena de media query para un solo breakpoint, puedes pasar un array de media queries. Internamente el hook crea un objeto `MediaQueryList` por cada media query y añade un event listener de "change" a cada uno para monitorear el cambio de cada breakpoint.

#### Parámetros

- **queries** (requerido): Array de strings de media queries CSS.

#### Retorna

- **object**: Objeto cuyas claves son las media queries pasadas y cuyos valores son booleanos.

### useFonts

Este hook es útil para cargar y establecer font-faces en una aplicación durante el tiempo de ejecución. Para funcionar, este hook debe hacer uso de la API FontFace del navegador.

#### Parámetros

- **fonts** (requerido): Array de objetos que contienen información de las fuentes a cargar.
  - **family**: Nombre de la familia de fuente.
  - **url**: URL de la fuente.
  - **options**: Objeto con opciones como `weight` y `style`.

#### Retorna

- **void**: Este hook no retorna valores, carga las fuentes directamente en el documento.

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
