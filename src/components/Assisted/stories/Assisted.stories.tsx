import type { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props } from "../props";
import { AssistedController } from "./Assisted.Controller";

const meta = {
  title: "Feedback/Assisted",
  component: AssistedController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof AssistedController>;

type Story = StoryObj<typeof meta>;

const stepsMock = [
  {
    id: "general",
    number: 1,
    name: "Información general",
    description: "Información general",
  },
  {
    id: "branches",
    number: 2,
    name: "Ramas",
    description: "Ramas",
  },
  {
    id: "projects",
    number: 3,
    name: "Proyectos",
    description: "Proyectos",
  },
  {
    id: "help",
    number: 4,
    name: "Unidades de ayuda",
    description: "Unidades de ayuda",
  },
  {
    id: "payroll",
    number: 5,
    name: "Nómina",
    description: "Nómina",
  },
  {
    id: "verification",
    number: 6,
    name: "Verificación",
    description: "Verificación",
  },
];

const Default: Story = {
  args: {
    steps: stepsMock,
    size: "large",
    disableBack: false,
    disableNext: false,
    disableSubmit: false,
    showCurrentStepNumber: true,
    controls: {
      goBackText: "Anterior",
      goNextText: "Siguiente",
      submitText: "Enviar",
    },
  },
};

export default meta;
export { Default };
