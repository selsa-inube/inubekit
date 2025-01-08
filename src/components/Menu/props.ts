import { menuItemSpacing } from "./MenuItem/props";

const props = {
  userName: {
    description:
      "The name of the user. This is displayed in the MenuUser component.",
  },
  sections: {
    description:
      "An array of sections to be displayed in the MenuSection component.",
  },
  businessUnit: {
    description:
      "The business unit the user belongs to. This is displayed in the MenuUser component. This is optional.",
  },
  avatar: {
    description:
      "A boolean indicating whether an avatar should be displayed for the user in the MenuUser component. This is optional.",
  },
  spacing: {
    options: menuItemSpacing,
    control: { type: "select" },
    description:
      "The type of spacing to be used for the items in the MenuSection component. This is of type MenuItemSpacingType. This is optional.",
  },
};

export { props };
