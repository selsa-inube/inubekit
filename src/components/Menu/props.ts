const props = {
  children: {
    control: { disable: true },
    description:
      "The menu content, typically MenuUser, MenuSection, MenuAction, and MenuLink components",
  },
  width: {
    control: { type: "text" as const },
    description: "The width of the menu container",
    table: {
      defaultValue: { summary: "fit-content" },
    },
  },
};

export { props };
