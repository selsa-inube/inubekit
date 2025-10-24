const parameters = {
  docs: {
    description: {
      component:
        "Element that helps separate pieces of content into groups, sections, options, or parts, providing a clear and defined visual distinction.",
    },
  },
};

const props = {
  dashed: {
    description:
      "Determines whether the divider will be dashed or solid. If not provided, the divider defaults to a solid line.",
  },
  marginTop: {
    description:
      "Specifies the margin space above the divider. This allows for customizable spacing from elements above it.",
  },
  marginBottom: {
    description:
      "Specifies the margin space below the divider. This allows for customizable spacing from elements below it.",
  },
};

export { parameters, props };
