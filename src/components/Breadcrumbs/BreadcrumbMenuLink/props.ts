const parameters = {
  docs: {
    description: {
      component:
        "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    },
  },
};

const props = {
  id: {
    control: "text" as const,
    description: "shall be the id for the text",
  },
  label: {
    control: "text" as const,
    description: "shall constitute the content to be displayed",
  },
  size: {
    options: ["large", "medium", "small"],
    control: "select" as const,
    description: "indicates the font size used in the component",
  },
  path: {
    control: "text" as const,
    description: "is the path where the BreadcrumbLink is going to navigate",
  },
};

export { parameters, props };
