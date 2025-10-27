const order = ["asc", "desc"] as const;
type IMonthpickerOrder = (typeof order)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Monthpicker allows users to select a month from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  onChange: {
    action: "Monthpicker",
    description: "Function to handle the change in month selection.",
  },
  start: {
    control: { type: "number" as const },
    description:
      "The starting index of months to display (0 for January, 11 for December).",
    defaultValue: 0,
  },
  end: {
    control: { type: "number" as const },
    description:
      "The ending index of months to display (0 for January, 11 for December).",
    defaultValue: 11,
  },
  locales: {
    control: { type: "text" as const },
    description: 'Locale for month names (e.g., "en-US", "es-ES").',
    defaultValue: "es-ES",
  },
  order: {
    control: { type: "select" as const },
    options: order,
    description: "Order of the months displayed (ascending or descending).",
    defaultValue: "asc",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  value: {
    control: { type: "text" as const },
    description: "The currently selected month value.",
    defaultValue: "",
  },
};

export { parameters, props };
export type { IMonthpickerOrder };
