# Nav

Esta librería publica el componente `<Nav />`.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Dependencias

- **styled-components**: esta librería debe estar instalada en tu proyecto para poder usar el componente.

## Importación

```jsx
import { Nav } from "@inubekit/inubekit";
```

## Props

### navigation

Esta propiedad es obligatoria y corresponde al objeto principal que gestiona las rutas de navegación dentro de la aplicación. Define cómo se organizan y presentan las diferentes secciones del componente de navegación.

### actions (opcional)

Esta propiedad es opcional y representa un array de acciones que se mostrarán después de un divisor en el componente de navegación. Se recomienda utilizar este atributo para proporcionar accesos directos a funciones clave que mejoren la experiencia del usuario.

### collapse (opcional)

Esta propiedad es opcional y determina si el componente de navegación debe estar colapsado o expandido. Es útil para interfaces con espacio limitado o cuando se desea una vista más limpia.

1. **Por defecto: false**

### footerLabel (opcional)

Esta propiedad es opcional y permite definir una etiqueta que se mostrará en el pie del componente de navegación. Puede utilizarse para mostrar información adicional o branding, como el nombre de la aplicación o un eslogan.

1. **Por defecto: `inube - ${year}`**

### footerLogo (opcional)

Esta propiedad es opcional y permite especificar una URL o un identificador para un logo que se mostrará en el pie del componente de navegación. Esto ayuda a reforzar la identidad visual de la aplicación y a mejorar su apariencia general.

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](./TOKENS.md).
