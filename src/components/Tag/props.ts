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

const weights = ["normal", "strong"] as const;

type ITagAppearance = (typeof appearances)[number];
type ITagWeight = (typeof weights)[number];
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
  weight: {
    control: "select",
    options: weights,
    description:
      "Controls the color intensity of the label text. The available options are 'normal' and 'strong'. Defaults to 'normal'.",
    type: { name: "enum", value: weights },
  },
};

export { parameters, props };
export type { ITagAppearance, ITagWeight };
