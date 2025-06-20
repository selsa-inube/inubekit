const sizes = ["large", "medium", "small"] as const;
type ILabelSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute",
    },
  },
};

const props = {
  disabled: {
    description: "indicates wheter the text is in its disabled state",
    table: {
      defaultValue: { summary: false },
    },
  },
  focused: {
    description: "indicates wheter the text is in its focused state",
    table: {
      defaultValue: { summary: false },
    },
  },
  htmlFor: {
    options: ["id"],
    control: { type: "select" },
    description: "Useful to match this label with the id of a specific entry",
  },
  invalid: {
    description: "Indicates the possible states in witch the label could be",
    table: {
      defaultValue: { summary: false },
    },
  },
  margin: {
    description:
      "Sets the margin in px or global values for all four sides of the component.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  padding: {
    description:
      "Sets the padding in px or global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "indicates the font size used in the component",
  },
  children: {
    description: "component text content",
  },
  ellipsis: {
    description:
      "prop to prevent text overflow, showing as much as possible with '...'",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { props, parameters, sizes };
export type { ILabelSize };
