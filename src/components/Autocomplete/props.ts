const parameters = {
  docs: {
    description: {
      component:
        "Autocomplete component that suggests options as the user types.",
    },
  },
};

const props = {
  label: {
    description: "Label for the autocomplete input.",
    control: { type: "text" as const },
  },
  name: {
    description: "Name attribute for the input field.",
    control: { type: "text" as const },
  },
  id: {
    description: "ID attribute for the input field.",
    control: { type: "text" as const },
  },
  placeholder: {
    description: "Placeholder text for the input field.",
    control: { type: "text" as const },
  },
  disabled: {
    description: "Disables the input field.",
    control: { type: "boolean" as const },
    table: {
      defaultValue: { summary: "false" },
    },
  },
  required: {
    description: "Marks the input field as required.",
    control: { type: "boolean" as const },
    table: {
      defaultValue: { summary: "false" },
    },
  },
  status: {
    description: "Status of the input field.",
    control: { type: "select" as const },
    options: ["invalid", "pending"],
  },
  message: {
    description: "Message to display under the input field.",
    control: { type: "text" as const },
  },
  size: {
    description: "Size of the input field.",
    control: { type: "select" as const },
    options: ["wide", "compact"],
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  fullwidth: {
    description:
      "If true, the input field will take the full width of its container.",
    control: { type: "boolean" as const },
    table: {
      defaultValue: { summary: "false" },
    },
  },
  options: {
    description: "Options for the autocomplete dropdown.",
    control: { type: "object" as const },
  },
  onOptionSelect: {
    control: { disable: true },
    description: "Callback function when an option is selected.",
  },
};

export { parameters, props };
