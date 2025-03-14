const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

const sizes = ["medium", "large"] as const;

type MessageAppearanceType = (typeof appearances)[number];
type MessageSizeType = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Component that stores information to show the user without the need to be invasive.",
    },
  },
};

const props = {
  title: {
    description: "The title to be displayed",
    table: {
      defaultValue: { summary: false },
    },
  },
  appearance: {
    description: "The appearance of the message",
    options: appearances,
    control: { type: "select" },
    table: {
      defaultValue: { summary: "success" },
    },
  },
  fullwidth: {
    description: "The fullwidth of the message",
    table: {
      defaultValue: { summary: "large" },
    },
  },
  width: {
    description: "The width of the message",
    table: {
      defaultValue: { summary: "large" },
    },
  },
  description: {
    description: "The description to be displayed",
    table: {
      defaultValue: { summary: false },
    },
  },
  primaryActionText: {
    description: "The text for the primary action",
    table: {
      defaultValue: { summary: false },
    },
  },
  secondaryActionText: {
    description: "The text for the secondary action",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { parameters, props };
export type { MessageAppearanceType, MessageSizeType };
