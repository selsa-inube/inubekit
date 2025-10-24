const shapes = ["circle", "rectangle"] as const;
type IIconShape = (typeof shapes)[number];

const spacings = ["narrow", "compact", "wide"] as const;
type IIconSpacing = (typeof spacings)[number];

const variants = ["filled", "outlined", "empty"] as const;
type IIconVariant = (typeof variants)[number];

const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type IIconAppearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

const props = {
  appearance: {
    options: appearances,
    description: "the base styling to apply to the icon",
    table: {
      defaultValue: { summary: "primary" },
    },
  },

  cursorHover: {
    description: "whether the icon changes upon cursor hover",
    table: {
      defaultValue: { summary: "false" },
    },
  },

  parentHover: {
    description: "whether the icon changes upon its parent hover",
    table: {
      defaultValue: { summary: "false" },
    },
  },

  icon: {
    description: "icon to be displayed inside the Icon component",
  },

  disabled: {
    description: "set if the icon is disabled",
    table: {
      defaultValue: { summary: "false" },
    },
  },

  spacing: {
    options: spacings,
    description: "spacing around the icon",
    table: {
      defaultValue: { summary: "wide" },
    },
  },

  variant: {
    options: variants,
    description: "variant of the icon",
    table: {
      defaultValue: { summary: "filled" },
    },
  },

  shape: {
    options: shapes,
    description: "shape of the icon",
    table: {
      defaultValue: { summary: "circle" },
    },
  },

  onClick: {
    description: "function to handle icon click",
  },

  size: {
    description: "size of the icon in pixels",
  },

  cursor: {
    description: "cursor style when hovering over the icon",
  },
};

export { parameters, props, shapes, spacings, variants };
export type { IIconAppearance, IIconShape, IIconSpacing, IIconVariant };
