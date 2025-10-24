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
  },
  appearance: {
    description: "The appearance of the message",
    options: appearances,
    control: { type: "select" as const },
    table: {
      defaultValue: { summary: "success" },
    },
  },
  fullwidth: {
    description: "The fullwidth of the message",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  width: {
    description: "The width of the message",
  },
  size: {
    description: "The size of the message",
    options: sizes,
    control: { type: "select" as const },
    table: {
      defaultValue: { summary: "large" },
    },
  },
  description: {
    description: "The description to be displayed",
  },
  primaryActionText: {
    description: "The text for the primary action",
  },
  secondaryActionText: {
    description: "The text for the secondary action",
  },
  primaryAction: {
    description: "The function to be called when the primary action is clicked",
  },
  secondaryAction: {
    description:
      "The function to be called when the secondary action is clicked",
  },
};

export { parameters, props };
export type { MessageAppearanceType, MessageSizeType };
