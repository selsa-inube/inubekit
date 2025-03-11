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

const sizes = ["small", "large"] as const;

type MessageAppearanceType = (typeof appearances)[number];
type MessageSizeType = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute",
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
  icon: {
    description: "The icon to be displayed",
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
  size: {
    description: "The size of the message",
    options: sizes,
    control: { type: "select" },
    table: {
      defaultValue: { summary: "large" },
    },
  },
  children: {
    description: "The content to be displayed",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { parameters, props, sizes };
export type { MessageAppearanceType, MessageSizeType };
