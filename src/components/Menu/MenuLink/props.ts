import { menuItemSpacing } from "../MenuItem/props";

const props = {
  title: {
    description: "The title text to display in the menu link",
  },
  description: {
    description: "Optional description text to display below the title",
  },
  spacing: {
    options: menuItemSpacing,
    control: { type: "select" as const },
    description: "Defines the spacing size of the menu link",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  iconBefore: {
    control: false as const,
    description: "Icon to display before the text",
  },
  iconAfter: {
    control: false as const,
    description: "Icon to display after the text",
  },
  disabled: {
    description: "Disables the menu link",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  path: {
    description: "The path where the MenuLink will navigate (required)",
  },
};

export { props };
