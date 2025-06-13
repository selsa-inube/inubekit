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
    control: { type: "object" },
    description:
      "Object representing the current step being displayed. It should include at least the properties `number` (step number) and `name` (step title).",
    table: {
      type: { summary: "IProgressCardStep" },
      defaultValue: { summary: "undefined" },
    },
  },
  totalSteps: {
    control: { type: "number" },
    description: "Total number of steps in the process.",
    table: {
      defaultValue: { summary: "undefined" },
    },
  },
  showStepIndicator: {
    control: { type: "boolean" },
    description:
      "Determines whether to show the visual indicator of the current step (a circle with the step number).",
    table: {
      defaultValue: { summary: true },
    },
  },
  showCurrentStepNumber: {
    control: { type: "boolean" },
    description:
      "Determines whether to display the current step number along with the total (e.g., 2/5).",
    table: {
      defaultValue: { summary: true },
    },
  },
  percentage: {
    control: { type: "number" },
    description:
      "Progress percentage displayed on the progress bar. If not provided, it is calculated automatically based on the current step and total steps.",
    table: {
      defaultValue: { summary: "calculated automatically" },
    },
  },
  onComplete: {
    control: { type: "function" },
    description:
      "Callback function triggered when the last step of the process is reached.",
  },
};

export { parameters, props };
export type { IProgressCardStep };
