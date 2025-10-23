const parameters = {
  docs: {
    description: {
      component:
        "The Box component is a layout container that provides spacing and border styling options.",
    },
  },
};

const props = {
  children: {
    control: { type: "text" as const },
    description: "Content to be rendered inside the Box component.",
  },
  padding: {
    description: "Sets the padding for all four sides of the component.",
    control: { type: "text" as const },
    table: {
      defaultValue: { summary: "16px" },
    },
  },
  margin: {
    description: "Sets the margin for all four sides of the component.",
    control: { type: "text" as const },
  },
  borderRadius: {
    description: "Sets the border radius of the component.",
    control: { type: "text" as const },
    table: {
      defaultValue: { summary: "8px" },
    },
  },
  width: {
    description: "Sets the width of the component.",
    control: { type: "text" as const },
  },
  height: {
    description: "Sets the height of the component.",
    control: { type: "text" as const },
  },
};

export { parameters, props };
