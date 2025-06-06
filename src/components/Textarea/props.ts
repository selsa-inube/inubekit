const status = ["invalid", "pending"] as const;

type ITextareaAppearence = "danger" | "warning" | "gray";
type ITextareaStatus = (typeof status)[number];

const sizes = ["wide", "compact"] as const;
type ITextareaSize = (typeof sizes)[number];

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
    description: "name of the Textarea element",
  },
  id: {
    description:
      "uniquely identifies the **Textarea Component**, it will also allow the **label element** to be connected to the **Textarea element** through the htmlFor of the label",
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
  value: {
    description: "component initial value",
  },
  onChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  maxLength: {
    description:
      "defines how many characters maximum are received in the component value",
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
  size: {
    options: sizes,
    control: { type: "select" },
    description: "defines the size of the component",
  },
  message: {
    description:
      "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
  },
  fullwidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },

  lengthThreshold: {
    description:
      "defines the minimum number of characters for displaying counter alerts",
  },
};

export { parameters, props };
export type { ITextareaAppearence, ITextareaStatus, ITextareaSize };
