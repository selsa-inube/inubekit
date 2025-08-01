# Pagination

Esta librería publica el subcomponente `Pagination`, esté proporciona controles de navegación para paginar el contenido de una tabla.

## Instalación

La librería está publicada en npm.

```bash
npm install @inubekit/inubekit
```

## Importación

```tsx
import { Pagination } from "@inubekit/inubekit";
```

## Props

### firstEntryInPage

El número de la primera entrada mostrada en la página actual.

1. **Tipo:** `number`.

### lastEntryInPage

El número de la última entrada mostrada en la página actual.

1. **Tipo:** `number`.

### totalRecords

El número total de registros disponibles.

1. **Tipo:** `number`.

### handleStartPage

Función que se ejecuta al navegar a la primera página.

1. **Tipo:** `() => void`

### handlePrevPage

Función que se ejecuta al navegar a la página anterior.

1. **Tipo:** `() => void`

### handleNextPage

Función que se ejecuta al navegar a la página siguiente.

1. **Tipo:** `() => void`

### handleEndPage

Función que se ejecuta al navegar a la última página.

1. **Tipo:** `() => void`

## Personalización

### Tokens

- Este componente define sus tokens de color por los valores definidos en el tema. Los tokens definidos están especificados en el archivo [TOKENS.md](../TOKENS.md).
