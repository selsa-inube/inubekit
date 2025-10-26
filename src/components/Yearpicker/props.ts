const order = ["asc", "desc"] as const;
type IYearpickerOrder = (typeof order)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Yearpicker allows users to select a year from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  onChange: {
    control: { disable: true },
    description: "Function to handle the change in year selection.",
  },
  start: {
    control: { type: "number" as const },
    description: "The starting year to display.",
    table: {
      defaultValue: { summary: "2000" },
    },
  },
  end: {
    control: { type: "number" as const },
    description: "The ending year to display.",
    table: {
      defaultValue: { summary: "current year" },
    },
  },
  order: {
    control: { type: "select" as const },
    options: order,
    description: "Order of the years displayed (ascending or descending).",
    table: {
      defaultValue: { summary: "desc" },
    },
  },
  placeholder: {
    control: { type: "text" as const },
    description: "text to display in the text field whenever it is empty",
  },
  value: {
    control: { type: "text" as const },
    description: "The currently selected year value.",
    table: {
      defaultValue: { summary: "" },
    },
  },
};

export { parameters, props };
export type { IYearpickerOrder };
