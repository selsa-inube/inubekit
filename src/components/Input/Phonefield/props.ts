import { parameters, props as inputProps } from "../Input/props";

const props = {
  ...inputProps,
  onDialValueChange: {
    description: "Callback function triggered when the dial code value changes",
  },
  initialCountryCode: {
    description: "Initial country code to display (e.g., 'COL', 'USA')",
  },
  initialDialValue: {
    description: "Initial dial code value (e.g., '+57', '+1')",
  },
  hideDialCode: {
    description: "Whether to hide the dial code display",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { parameters, props };
