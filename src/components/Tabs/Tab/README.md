# Tab

La estructura de la interfaz de Tab es la siguiente:

```jsx
interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
  icon?: IIcon;
}
```

A continuación, se describen sus propiedades:

## Props

### id (opcional)

Identificador único de la pestaña.

### label

Texto principal de la pestaña.

### disabled (opcional)

Deshabilita la interacción con la pestaña.

1. **Por defecto: false**

### selected (opcional)

Indica si la pestaña está seleccionada.

1.  **Por defecto: false**

### icon (opcional)

Ícono que se muestra junto al texto. Debe seguir la interfaz `IIcon`, la cual puede consultarse en el README correspondiente a este componente [README.md](../../Icon/README.md).
