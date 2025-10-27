const parameters = {
  docs: {
    description: {
      component:
        "The OptionList container is used within the Select component to display a list of options. It manages the display of options and handles user interactions such as selecting an option.",
    },
  },
};

const props = {
  children: {
    control: { type: "object" as const },
    description:
      "An array of JSX elements representing the individual option items to be displayed in the list. Typically, these are OptionItem components.",
  },
  onOptionClick: {
    description:
      "A callback function triggered when an option is clicked. It receives the value of the selected option as a parameter.",
  },
  options: {
    control: { type: "object" as const },
    description:
      "An array of option objects that represent the data for the available options. Each object should have properties like `id`, `label`, and `value` to uniquely identify and display each option.",
  },
  maxItems: {
    control: { type: "number" as const },
    description:
      "Optional. The maximum number of items to display before adding scroll functionality. This helps manage the height of the dropdown when there are many options.",
  },
};

export { parameters, props };
