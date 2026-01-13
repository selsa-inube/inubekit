const parameters = {
  docs: {
    description: {
      component: "Buttons that allow the user to navigate within the side menu",
    },
  },
};

const props = {
  disabled: {
    description:
      "shall be determine if the tab is disabled (by Default is false) and is not required.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  selected: {
    description:
      "It is designed to ascertain whether the tab has been clicked or not (by Default is false) and is not required.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  path: {
    description:
      "is the path where the MenuLink is going to navigate and is required.",
  },
  id: {
    description: "shall be the id for the MenuLink and is required.",
  },
  onClick: {
    description:
      "(function): shall be determine the behavior of the click event and is not required.",
  },
  icon: {
    control: { disable: true },
    description:
      "shall constitute the icon to be displayed within the MenuLink-component and is required",
  },
  label: {
    description:
      "shall constitute the content to be displayed within the MenuLink-component and is required",
  },
  spacing: {
    description:
      "The Spacing property allows you to determine the padding that the component will have.",
    control: { type: "select" as const },
    options: ["wide", "compact"],
    table: {
      defaultValue: { summary: "wide" },
    },
  },
};

export { parameters, props };
