import { parameters, props } from "../props";
import {
  IProgressCardController,
  ProgressCardController,
} from "./ProgressCardcontroller";
import { ProgressCard } from "../index";

interface DefaultStoryArgs {
  steps: Record<string, { id: string; number: number; name: string }>;
  stepNumber: number;
  progress: number;
  appearance?: string;
  totalSteps?: number;
  onComplete?: () => void;
}

interface RuntimeStoryArgs extends IProgressCardController {
  run: boolean;
  appearance?: string;
}

const stepsMock: Record<string, { id: string; number: number; name: string }> =
  {
    general: { id: "general", number: 1, name: "Información general" },
    branches: { id: "branches", number: 2, name: "Ramas" },
    projects: { id: "projects", number: 3, name: "Proyectos" },
    help: { id: "help", number: 4, name: "Unidades de ayuda" },
    payroll: { id: "payroll", number: 5, name: "Nómina" },
    verification: { id: "verification", number: 6, name: "Verificación" },
  };

const story = {
  title: "feedback/ProgressCard",
  component: ProgressCardController,
  argTypes: {
    ...props,
    onComplete: { action: "onAnimationEnd" },
    stepNumber: { control: "number", min: 1 },
    progress: { control: "number", min: 0, max: 100 },
    run: { control: "boolean" },
    appearance: { control: "select", options: ["primary", "secondary"] },
  },
  parameters,
};

const Default = (args: DefaultStoryArgs) => {
  const {
    stepNumber = 1,
    progress = 0,
    steps = stepsMock,
    totalSteps = Object.values(stepsMock).length,
    onComplete,
  } = args;
  const step = Object.values(steps)[stepNumber - 1] || Object.values(steps);
  return (
    <ProgressCard
      step={step}
      totalSteps={totalSteps}
      progress={progress}
      appearance={"success"}
      onComplete={onComplete}
    />
  );
};

Default.args = {
  steps: stepsMock,
  stepNumber: 1,
  progress: 20,
  appearance: "primary",
  totalSteps: Object.values(stepsMock).length,
  onComplete: () => console.log("Completado"),
};

const Runtime = (args: RuntimeStoryArgs) => (
  <ProgressCardController {...args} />
);

Runtime.args = {
  steps: stepsMock,
  durationMs: 5000,
  appearance: "success",
  totalSteps: Object.values(stepsMock).length,
  run: true,
  onComplete: () => console.log("Completado"),
};

Runtime.argTypes = {
  run: { control: "boolean" },
};

export { Default, Runtime };
export default story;
