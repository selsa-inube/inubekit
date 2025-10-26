const sizes = ["wide", "compact"] as const;
type ISelectSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "The Select component provides a dropdown menu that allows users to choose one or more options from a predefined list. It supports various configurations such as disabling the field, making it read-only, and controlling the number of visible options before a scrollbar appears.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  disabled: {
    control: { type: "boolean" as const },
    description:
      "Determines whether the Select component is disabled. When set to `true`, the dropdown cannot be opened, and the user will not be able to interact with the input field. The field will also be visually styled as disabled.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  fullwidth: {
    control: { type: "boolean" as const },
    description:
      "Specifies whether the Select component should expand to fill the full width of its parent container. When set to `true`, the dropdown will stretch to fit the width of the container.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  id: {
    control: { type: "text" as const },
    description:
      "A unique identifier for the Select component. This ID connects the label element to the input element through the `htmlFor` attribute, ensuring proper accessibility and interaction.",
  },
  invalid: {
    control: { type: "boolean" as const },
    description:
      "Indicates whether the current value of the Select component is invalid. When set to `true`, the component will visually indicate an error state, often paired with an `invalidMessage` to describe the error.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  message: {
    control: { type: "text" as const },
    description:
      "A message that appears when the Select component is in an invalid state. This message provides feedback to the user, explaining why the selected value is considered invalid.",
  },
  label: {
    control: { type: "text" as const },
    description:
      "Text that appears as a label for the Select component. This label prompts the user with instructions or context about what value they should select from the dropdown.",
  },
  maxItems: {
    control: { type: "number" as const },
    description:
      "Defines the maximum number of items that will be visible in the dropdown list at one time. If the number of options exceeds this value, a scrollbar will appear to allow the user to scroll through additional options.",
    table: {
      defaultValue: { summary: "5" },
    },
  },
  name: {
    control: { type: "text" as const },
    description:
      "Specifies the name attribute of the input element within the Select component. This name is used to identify the form data after submission and is often required for backend processing.",
  },
  onBlur: {
    description:
      "A callback function that is triggered when the Select component loses focus. This event handler allows you to define custom behavior, such as validation or styling, when the user clicks away from the input field.",
  },
  onChange: {
    description:
      "A callback function that handles changes to the selected value in the dropdown. This function is essential for managing the selected value in a controlled component, where the parent component maintains the state.",
  },
  onFocus: {
    description:
      "A callback function that is triggered when the Select component gains focus. This allows you to perform actions such as highlighting the field or displaying additional information when the user interacts with the input.",
  },
  options: {
    control: { type: "object" as const },
    description:
      "An array of objects that represent the options available in the dropdown. Each object should have a predefined structure, typically including an `id`, `label`, and `value` to uniquely identify and display each option.",
  },
  placeholder: {
    control: { type: "text" as const },
    description:
      "Text displayed inside the input field when no value is selected. The placeholder provides a hint or example of the expected input, helping guide the user in making a selection.",
  },
  required: {
    control: { type: "boolean" as const },
    description:
      "Marks the Select component as a required field in a form. If set to `true`, the form cannot be submitted without a valid selection in this field, and the user will be prompted to make a selection.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description:
      "Determines the size of the Select component. The `wide` size offers a more expansive input field, while `compact` provides a smaller, more concise field. Choose based on the amount of space available and the desired UI design.",
  },
  value: {
    control: { type: "text" as const },
    description:
      "Represents the current value of the Select component. This value should be controlled by the parent component, ensuring that the selected option is correctly managed and updated in response to user interaction.",
  },
  clearable: {
    control: { type: "boolean" as const },
    description:
      "Indicates whether the Select component allows the user to clear the selected value. When set to `true`, a clear button will appear, enabling users to reset their selection easily.",
  },
};

export { parameters, props, sizes };
export type { ISelectSize };
