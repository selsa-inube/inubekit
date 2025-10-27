# Text Component Token Schema

Este archivo define el schema de validación de tokens para el componente Text.

## Uso

### Desde inubekit-tokens-service

```typescript
import { textTokenSchema } from "@inubekit/inubekit";
import { validateClientTokens } from "./validators/tokenValidator";

const errors = validateClientTokens(
  coopcarvajal,
  "coopcarvajal",
  "text",
  textTokenSchema,
);
```

### Desde cualquier proyecto

```typescript
import {
  textTokenSchema,
  SchemaDefinition,
  SchemaType,
} from "@inubekit/inubekit";

// El schema contiene la estructura completa de tokens requeridos
console.log(textTokenSchema.primary);
```

## Estructura del Schema

El schema define los tokens requeridos para todas las variantes del componente Text:

- `primary`
- `success`
- `warning`
- `danger`
- `help`
- `dark`
- `gray`
- `light`

Cada variante tiene la siguiente estructura:

```typescript
{
  type: "object",
  required: true,
  properties: {
    content: {
      type: "object",
      required: true,
      properties: {
        color: {
          type: "object",
          required: true,
          properties: {
            regular: { type: "string", required: true },
            disabled: { type: "string", required: true },
            hover: { type: "string", required: true },
          },
        },
      },
    },
  },
}
```

## Próximos Pasos

Este mismo patrón se replicará para todos los componentes de inubekit, permitiendo que el servicio de validación de tokens pueda verificar que los tokens de los clientes sean compatibles con las versiones de los componentes.
