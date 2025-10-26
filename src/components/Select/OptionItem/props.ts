const parameters = {
  docs: {
    description: {
      component:
        "The OptionItem component represents a single option within a Select dropdown. It can display as a simple text item or include a checkbox for multi-select scenarios.",
    },
  },
};

const props = {
  id: {
    control: { type: "text" as const },
    description:
      "A unique identifier for the option item. This ID is used to identify the selected option.",
  },
  label: {
    control: { type: "text" as const },
    description:
      "The label text that is displayed for the option. This provides a human-readable description of the option.",
  },
  picker: {
    control: { type: "boolean" as const },
    description:
      "Determines whether the option displays a checkbox for multi-select functionality. When true, a checkbox is shown alongside the label.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  checked: {
    control: { type: "boolean" as const },
    description:
      "Controls whether the checkbox (if picker is true) is checked. Only applicable when picker is enabled.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  onCheckboxChange: {
    control: { disable: true },
    description:
      "An optional callback function that is triggered when the checkbox state changes. Only applicable when picker is enabled.",
  },
};

export { parameters, props };
