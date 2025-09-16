import type { ArgTypes } from "@storybook/react-vite";
import type { IButton } from ".";

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

type IButtonAppearance = (typeof appearances)[number];

const spacings = ["wide", "compact"] as const;

type IButtonSpacing = (typeof spacings)[number];

const types = ["button", "submit", "reset", "link"] as const;

type IButtonType = (typeof types)[number];

const variants = ["filled", "outlined", "none"] as const;

type IButtonVariant = (typeof variants)[number];

const props: ArgTypes<IButton> = {
  children: {
    control: { type: "text" },
    description: "the text to be displayed",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  loading: {
    options: [false, true],
    control: { type: "boolean" },
    description: "conditionally show a spinner over the top of a button",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "the base styling to apply to the button",
    table: {
      type: { summary: "IButtonAppearance" },
      defaultValue: { summary: "primary" },
    },
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" },
    description: "set if the button is disabled",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  iconBefore: {
    control: { type: "text" },
    description: "places an icon within the button, before the button's text",
    table: {
      type: { summary: "ReactElement" },
      defaultValue: { summary: "</>" },
    },
    type: "symbol",
  },
  iconAfter: {
    control: { type: "text" },
    type: "symbol",
    description: "places an icon within the button, after the button's text",
    table: {
      type: { summary: "ReactElement" },
    },
  },
  type: {
    options: types,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      type: { summary: "IButtonType" },
      defaultValue: { summary: "button" },
    },
  },
  spacing: {
    options: spacings,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      type: { summary: "IButtonSpacing" },
      defaultValue: { summary: "wide" },
    },
  },
  variant: {
    options: variants,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      type: { summary: "IButtonVariant" },
      defaultValue: { summary: "filled" },
    },
  },
  fullwidth: {
    options: [true, false],
    control: { type: "boolean" },
    description: "option to fit button width to its parent width",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  onClick: {
    control: false,
    type: "function",

    description: "function to control button click",
    table: {
      type: { summary: "(e?: Event) => void" },
    },
  },
  path: {
    control: { type: "text" },
    description:
      "Is the path where the button is going to navigate when is used as button for navigation",
    table: {
      type: { summary: "string" },
    },
  },
  width: {
    control: { type: "text" },
    description: "custom width of the button",
    table: {
      type: { summary: "string" },
    },
  },
  cursorHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the button changes upon cursor hover",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
  parentHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the button changes upon its parent hover",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
};

export { appearances, props, spacings, variants, types };
export type { IButtonAppearance, IButtonSpacing, IButtonType, IButtonVariant };
