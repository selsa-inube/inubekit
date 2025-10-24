const sizes = ["large", "small"] as const;
type IBreadcrumbEllipsisSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    },
  },
};

const props = {
  handleClick: {
    control: { disable: true },
    description: "shall be determine the behavior of the click event",
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description: "indicates the font size used in the component",
    table: {
      defaultValue: { summary: "large" },
    },
  },
  routes: {
    description:
      "The breadcrumb-component will utilize this routes for display, and consequently, it can be employed to locate the source of breadcrumbLinks present within this component.",
    table: {
      defaultValue: {
        summary: `This structure must be present [{ label: "", path: "", id: "" }]`,
      },
    },
  },
};

export { parameters, props, sizes };
export type { IBreadcrumbEllipsisSize };
