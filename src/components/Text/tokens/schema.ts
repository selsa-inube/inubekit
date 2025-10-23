export type SchemaType = "string" | "number" | "object" | "boolean" | "array";

export interface SchemaDefinition {
  type: SchemaType;
  required: boolean;
  properties?: Record<string, SchemaDefinition>;
  description?: string;
}

const colorPropertiesSchema: Record<string, SchemaDefinition> = {
  regular: {
    type: "string",
    required: true,
    description: "Color por defecto",
  },
  disabled: {
    type: "string",
    required: true,
    description: "Color cuando está deshabilitado",
  },
  hover: {
    type: "string",
    required: true,
    description: "Color al pasar el mouse",
  },
};

const createVariantSchema = (description?: string): SchemaDefinition => ({
  type: "object",
  required: true,
  description,
  properties: {
    content: {
      type: "object",
      required: true,
      properties: {
        color: {
          type: "object",
          required: true,
          properties: colorPropertiesSchema,
        },
      },
    },
  },
});

export const textTokenSchema: Record<string, SchemaDefinition> = {
  primary: createVariantSchema("Tokens para la variante primaria"),
  success: createVariantSchema("Tokens para la variante success"),
  warning: createVariantSchema("Tokens para la variante warning"),
  danger: createVariantSchema("Tokens para la variante danger"),
  help: createVariantSchema("Tokens para la variante help"),
  dark: createVariantSchema("Tokens para la variante dark"),
  gray: createVariantSchema("Tokens para la variante gray"),
  light: createVariantSchema("Tokens para la variante light"),
};

export default textTokenSchema;
