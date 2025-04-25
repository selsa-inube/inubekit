const appearances = [
  "primary",
  "success",
  "danger",
  "warning",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type ITagAppearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

const props = {
  appearance: {
    control: "select",
    options: appearances,
    description:
      "Controls the background color of the tag. The available options are predefined styles such as primary, success, danger, etc. Defaults to 'primary'.",
    type: { name: "enum", value: appearances },
  },
  id: {
    description:
      "A unique identifier for the tag component. This is an optional field.",
    type: { name: "string" },
  },
  label: {
    description:
      "Controls the text that the tag will display. This is a required field.",
    type: { name: "string" },
  },
  onClose: {
    description:
      "Callback function that is triggered when the close icon is clicked. This function receives a MouseEvent as an argument.",
    type: { name: "function", params: [{ name: "MouseEvent" }] },
  },
  removable: {
    description:
      "Determines if the tag can be removed. When true, a close icon is displayed. Defaults to false.",
    type: { name: "boolean" },
  },
  displayIcon: {
    description: "Determines whether the tag should be accompanied by an icon.",
    type: { name: "boolean" },
  },
  icon: {
    description:
      "Corresponds to the icon that you want to show in the component " +
      "Requires displayIcon to be true to be visible.",
    type: { name: "ReactElement" },
  },
};

export { parameters, props };
export type { ITagAppearance };
