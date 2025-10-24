const props = {
  title: {
    control: { type: "text" as const },
    description: "The title of the menu action.",
  },
  description: {
    control: { type: "text" as const },
    description: "The description of the menu action.",
  },
  iconBefore: {
    control: { disable: true },
    description: "Icon to be displayed before the title.",
  },
  iconAfter: {
    control: { disable: true },
    description: "Icon to be displayed after the title.",
  },
  spacing: {
    options: ["compact", "wide"],
    control: { type: "select" as const },
    description: "Defines the spacing of the menu item.",
  },
  disabled: {
    control: { type: "boolean" as const },
    description: "Disables the menu action.",
  },
  action: {
    control: { disable: true },
    description: "Function to be executed on menu action click.",
  },
};

export { props };
