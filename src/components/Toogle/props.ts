const sizes = ["small", "large"] as const;
type IToggleSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A toggle switch used to change between enabled or disabled states.",
    },
  },
};

const props = {
  checked: {
    options: [true, false],
    control: { type: "boolean" as const },
    description:
      "Defines whether the toggle is in the checked (enabled) or unchecked (disabled) state.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  children: {
    control: { type: "text" as const },
    description:
      "Text or elements to be displayed alongside the toggle switch.",
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" as const },
    description:
      "Disables the toggle switch when set to true, preventing user interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  id: {
    control: { type: "text" as const },
    description:
      "The unique identifier for the toggle switch. It allows the toggle to be connected to a label.",
  },
  margin: {
    control: { type: "text" as const },
    description:
      "Sets the outer margin of the toggle in px or global spacing values. Accepts spacing tokens.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  name: {
    control: { type: "text" as const },
    description:
      "The name of the toggle, used when submitting the value as part of a form.",
  },
  onChange: {
    control: { disable: true },
    description:
      "Function that is triggered whenever the toggle's state is modified.",
  },
  padding: {
    control: { type: "text" as const },
    description:
      "Sets the inner padding of the toggle in px or global spacing values. Accepts spacing tokens.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description:
      "Defines the size of the toggle switch. Options are 'small' or 'large'.",
    table: {
      defaultValue: { summary: "small" },
    },
  },
  value: {
    control: { type: "text" as const },
    description:
      "The value to be submitted in a form when the toggle is checked.",
  },
};

export { props, parameters };
export type { IToggleSize };
