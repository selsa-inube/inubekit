const props = {
  key: {
    control: { type: "text" as const },
    description: "Unique key for the menu section",
  },
  title: {
    control: { type: "text" as const },
    description:
      "Optional title for the menu section, displayed as a heading above the section content",
  },
  children: {
    control: { disable: true },
    description:
      "The menu items (MenuAction or MenuLink components) to display within the section",
  },
  divider: {
    control: { type: "boolean" as const },
    description:
      "When true, displays a divider line above the section. Default is false",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  spacing: {
    options: ["wide", "compact"],
    control: { type: "select" as const },
    description: "Defines the spacing size of the menu section",
  },
  disable: {
    control: { type: "boolean" as const },
    description: "Disables all menu items within the section",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  iconBefore: {
    control: { disable: true },
    description: "Icon to display before the title",
  },
};

export { props };
