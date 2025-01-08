const menuItemSpacing = ["wide", "compact"] as const;

type MenuItemSpacingType = (typeof menuItemSpacing)[number];

const props = {};

export { menuItemSpacing, props };
export type { MenuItemSpacingType };
