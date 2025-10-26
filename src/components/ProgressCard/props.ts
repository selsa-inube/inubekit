interface IProgressCardStep {
  id: string | number;
  number: number;
  name: string;
}

const parameters = {
  docs: {
    description: {
      component:
        "Component that displays a progress card with a visual indicator of the current step, a progress bar, and the completed percentage in a step-by-step process.",
    },
  },
};

const props = {
  step: {
    control: { type: "object" as const },
    description:
      "Object representing the current step being displayed. It should include at least the properties `number` (step number) and `name` (step title).",
    table: {
      type: { summary: "IProgressCardStep" },
      defaultValue: { summary: "undefined" },
    },
  },
  totalSteps: {
    control: { type: "number" as const },
    description: "Total number of steps in the process.",
    table: {
      defaultValue: { summary: "undefined" },
    },
  },
  displayStep: {
    control: { type: "boolean" as const },
    description:
      "Determines whether to show the visual indicator of the current step (a circle with the step number).",
    table: {
      defaultValue: { summary: "true" },
    },
  },
  countSteps: {
    control: { type: "boolean" as const },
    description:
      "Determines whether to display the current step number along with the total (e.g., 2/5).",
    table: {
      defaultValue: { summary: "true" },
    },
  },
  progress: {
    control: { type: "number" as const },
    description:
      "Progress percentage displayed on the progress bar. If not provided, it is calculated automatically based on the current step and total steps.",
    table: {
      defaultValue: { summary: "calculated automatically" },
    },
  },
  animated: {
    control: { type: "boolean" as const },
    description:
      "If true, adds a shimmer animation to indicate activity when progress is stuck.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  appearance: {
    control: { type: "select" as const },
    options: [
      "primary",
      "success",
      "warning",
      "danger",
      "help",
      "dark",
      "gray",
      "light",
    ],
    description: "Determines the color scheme of the progress bar.",
    table: {
      defaultValue: { summary: "calculated from theme" },
    },
  },
};

export { parameters, props };
export type { IProgressCardStep };
