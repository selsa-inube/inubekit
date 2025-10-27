const props = {
  id: {
    control: { type: "text" as const },
    description: "shall be the id for the text",
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" as const },
    description:
      "if the switch is disabled or not. This prevents any interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  selected: {
    options: [true, false],
    control: { type: "boolean" as const },
    description:
      "is designed to ascertain whether the tab has been clicked or not.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  label: {
    control: { type: "text" as const },
    description: "shall constitute the content to be displayed",
  },
  icon: {
    control: { type: "object" as const },
    description:
      "Corresponds to the icon that you want to show in the component",
  },
};

export { props };
