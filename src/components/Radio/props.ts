const parameters = {
  docs: {
    descriptions: {
      component:
        "A Radio component allows the user to select a single option from a list of multiple choices. It is a part of the form controls and interacts with other Radios to form a group where only one option can be selected at a time.",
    },
  },
};

const props = {
  checked: {
    description:
      "(boolean) (Optional): Indicates whether the Radio is currently selected. If true, the Radio will appear checked.",
  },
  disabled: {
    description:
      "(boolean) (Optional): Disables the Radio, preventing any user interaction. If true, the Radio will appear grayed out and non-interactive.",
  },
  id: {
    description:
      "(string): A unique identifier for the Radio. This ID links the input with the label, ensuring the label is clickable and accessible.",
  },
  label: {
    description:
      "(string) (Optional): The text label displayed next to the Radio. This label provides a description of the option the Radio represents.",
  },
  name: {
    description:
      "(string) (Optional): The name attribute groups Radios together. Radios with the same name form a group where only one option can be selected.",
  },
  onChange: {
    description:
      "(Function): A callback function that is triggered whenever the Radio's state changes (e.g., when a user selects or deselects the Radio). The function receives the change event as an argument.",
  },
  required: {
    description:
      "(boolean) (Optional): Marks the Radio as required in form submissions. If true, the user must select this option to proceed with the form.",
  },
  value: {
    description:
      "(string): The value attribute of the Radio. This value is submitted with the form data when the Radio is selected.",
  },
};

export { parameters, props };
