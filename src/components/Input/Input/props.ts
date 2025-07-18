const inputTypes = [
  "text",
  "email",
  "number",
  "password",
  "search",
  "tel",
  "money",
] as const;
type IInputInputType = (typeof inputTypes)[number];

const sizes = ["wide", "compact"] as const;
type IInputSize = (typeof sizes)[number];

const status = ["invalid", "pending"] as const;
type IInputStatus = (typeof status)[number];

interface ICounter {
  currentLength: number;
  maxLength?: number;
  minLength?: number;
}

const parameters = {
  docs: {
    description: {
      component:
        "A text field is an input that allows a user to write or edit text",
    },
  },
};

const props = {
  label: {
    description: "prompts the user what value to enter",
  },
  name: {
    description: "name of the input element",
  },
  id: {
    description:
      "uniquely identifies the **Input Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  disabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  type: {
    options: inputTypes,
    control: { type: "select" },
    description: "class name to apply to the input element",
    table: {
      defaultValue: { summary: "text" },
    },
  },
  value: {
    description: "component initial value",
  },
  onChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  iconBefore: {
    description:
      "allows to enter an icon to the left of the area where the user enters values",
  },
  iconAfter: {
    description:
      "allows to enter an icon to the right of the area where the user enters values",
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  status: {
    options: status,
    control: { type: "select" },
    description: "status of the component",
    table: {
      defaultValue: { summary: "pending" },
    },
  },
  message: {
    description:
      "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "defines the size of the component",
  },
  fullwidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { parameters, props };
export type { IInputInputType, IInputSize, IInputStatus, ICounter };
