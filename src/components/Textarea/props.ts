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
    control: { type: "text" as const },
    description: "prompts the user what value to enter",
  },
  name: {
    control: { type: "text" as const },
    description: "name of the Textarea element",
  },
  id: {
    control: { type: "text" as const },
    description:
      "uniquely identifies the **Textarea Component**, it will also allow the **label element** to be connected to the **Textarea element** through the htmlFor of the label",
  },
  placeholder: {
    control: { type: "text" as const },
    description: "text to display in the text field whenever it is empty",
  },
  disabled: {
    control: { type: "boolean" as const },
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  value: {
    control: { type: "text" as const },
    description: "component initial value",
  },
  onChange: {
    control: { disable: true },
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  maxLength: {
    control: { type: "number" as const },
    description:
      "defines how many characters maximum are received in the component value",
  },
  minLength: {
    control: { type: "number" as const },
    description:
      "defines how many characters minimum are received in the component value",
  },
  required: {
    control: { type: "boolean" as const },
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  status: {
    options: status,
    control: { type: "select" as const },
    description: "status of the component",
    table: {
      defaultValue: { summary: "pending" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description: "defines the size of the component",
  },
  message: {
    control: { type: "text" as const },
    description:
      "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
  },
  fullwidth: {
    control: { type: "boolean" as const },
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { parameters, props };
export type { ITextareaAppearence, ITextareaStatus, ITextareaSize };
