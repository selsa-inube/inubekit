# Foundations

Esta librería publica los tokens principales que son utilizados por cada componente individual. Son fundamentales porque establecen las variables mínimas necesarias que el sistema aplica en todos los componentes que forman parte de inubekit.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```jsx
import { inube } from "@inubekit/inubekit";
```

## Uso

Esta librería expone un conjunto de objetos que contienen los valores de algunas variables consideradas esenciales para la estética de todo el sistema. Además, sirve como fuente de valores predeterminados para estas variables.

No se espera que los usuarios de inubekit (los desarrolladores que usan el sistema de diseño para construir interfaces) trabajen directamente con esta librería. Esto se debe a que todos los componentes que esos desarrolladores utilizarán ya tienen esta dependencia instalada.

## Personalización

### Estructura y valores

Cuando los usuarios del sistema de diseño necesiten cambiar los valores de estas variables principales para proporcionar una estética diferente en sus aplicaciones, deben crear una estructura de tokens que siga la estructura que ofrece esta librería.

Es fundamental seguir esta estructura, ya que los componentes esperan extraer cada valor según la estructura de los objetos que lo contienen. El único segmento que puede cambiarse es el nombre `inube` del objeto exportado. Ese valor puede ser cualquier nombre, siempre que ese objeto se pase al objeto principal como `theme` en un Provider.

### Implementación

La nueva estructura puede añadirse directamente dentro del proyecto específico que necesite nuevos valores, o mediante la creación de un servicio que devuelva la estructura de datos dependiendo de ciertas condiciones (por ejemplo, para hacer que los valores sean dependientes de cada cliente o usuario de una aplicación específica).

Para que la personalización funcione, es necesario un método particular para hacer que estas variables sean accesibles para todos los componentes. En este sistema de diseño, la forma de lograrlo es utilizando el componente `<ThemeProvider />` exportado por **styled-components**. Esto también implica que los componentes del sistema están construidos utilizando **styled-components** como su enfoque CSS-in-JS para crear y estilizar los componentes.

### Tipografía

Esta parte de la estructura se comparte entre múltiples componentes que necesitan renderizar textos (`<Text />`, `<Button />`, `<Link />`, etc). Si necesitas cambiar la fuente utilizada en una aplicación, ten en cuenta que ajustar los valores de los tokens de tipografía es solo uno de los dos pasos necesarios.

1. Debes cambiar los tokens de tipografía siguiendo la estructura proporcionada para usar las nuevas fuentes deseadas.
2. Debes instalar la fuente en tu aplicación; de lo contrario, la aplicación intentará usar las fuentes de respaldo o utilizará directamente la fuente predeterminada del navegador si no se proporciona ninguna fuente de respaldo.

Opciones para instalar fuentes:

1. Puedes instalar manualmente la fuente en tu aplicación utilizando enlaces en tu archivo index.html o agregándola directamente con reglas @font-face en CSS.
2. Puedes usar el hook `useFonts()` que se encuentra en el componente **Hooks** para instalar fuentes dinámicamente en tiempo de ejecución (esto es útil cuando una sola aplicación debe admitir múltiples clientes, cada uno con una fuente diferente).
