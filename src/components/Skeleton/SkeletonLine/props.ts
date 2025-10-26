const parameters = {
  docs: {
    description: {
      component:
        "Skeleton line is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by users.",
    },
  },
};

const props = {
  width: {
    control: { type: "text" as const },
    description: "indicates the width that the component should take",
    table: {
      defaultValue: { summary: "100px" },
    },
  },
  height: {
    control: { type: "text" as const },
    description: "indicates the height that the component should take",
    table: {
      defaultValue: { summary: "16px" },
    },
  },
  animated: {
    control: { type: "boolean" as const },
    description: "enable loading effect animation",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { props, parameters };
