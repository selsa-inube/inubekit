import type { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props } from "../props";
import { ProgressCardController } from "./ProgressCardcontroller";
import { ProgressCard } from "../index";

const stepsMock: Record<string, { id: string; number: number; name: string }> =
  {
    general: { id: "general", number: 1, name: "Información general" },
    branches: { id: "branches", number: 2, name: "Ramas" },
    projects: { id: "projects", number: 3, name: "Proyectos" },
    help: { id: "help", number: 4, name: "Unidades de ayuda" },
    payroll: { id: "payroll", number: 5, name: "Nómina" },
    verification: { id: "verification", number: 6, name: "Verificación" },
  };

const meta = {
  title: "feedback/ProgressCard",
  component: ProgressCard,
  parameters,
  argTypes: props,
} satisfies Meta<typeof ProgressCard>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => {
    return (
      <ProgressCard {...args} totalSteps={Object.values(stepsMock).length} />
    );
  },
  args: {
    step: Object.values(stepsMock)[0],
    progress: 20,
    appearance: "success",
    animated: false,
  },
};

const Runtime: Story = {
  render: () => (
    <ProgressCardController
      steps={stepsMock}
      durationMs={5000}
      animated={false}
      totalSteps={Object.values(stepsMock).length}
    />
  ),
  args: {
    step: Object.values(stepsMock)[0],
  },
};

export default meta;
export { Default, Runtime };
