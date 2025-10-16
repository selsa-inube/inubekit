export type SchemaType = "string" | "number" | "object" | "boolean" | "array";

export interface SchemaDefinition {
  type: SchemaType;
  required: boolean;
  properties?: Record<string, SchemaDefinition>;
  description?: string;
}

export const textTokenSchema: Record<string, SchemaDefinition> = {
  primary: {
    type: "object",
    required: true,
    description: "Tokens para la variante primaria",
    properties: {
      content: {
        type: "object",
        required: true,
        properties: {
          color: {
            type: "object",
            required: true,
            properties: {
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
            },
          },
        },
      },
    },
  },
  success: {
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
  },
  warning: {
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
  },
  danger: {
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
  },
  help: {
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
  },
  dark: {
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
  },
  gray: {
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
  },
  light: {
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
  },
};

export default textTokenSchema;
