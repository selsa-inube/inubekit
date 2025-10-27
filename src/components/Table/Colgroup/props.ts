const parameters = {
  docs: {
    description: {
      component: "A versatile column group component for table structures.",
    },
  },
};

const props = {
  span: {
    control: {
      type: "number" as const,
    },
    description:
      "Defines the number of columns a `<colgroup>` element should span.",
  },
  children: {
    control: { disable: true },
    description: "Content to be rendered inside the **Colgroup** component.",
  },
};

export { props, parameters };
