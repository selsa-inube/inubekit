import { parameters, props } from "../props";
import {
  IProgressCardController,
  ProgressCardController,
} from "./ProgressCardcontroller";

const story = {
  title: "feedback/ProgressCard",
  component: ProgressCardController,
  argTypes: { ...props, onComplete: { action: "onAnimationEnd" } },
  parameters,
};

const stepsMock = {
  general: {
    id: "general",
    number: 1,
    name: "Información general",
  },
  branches: {
    id: "branches",
    number: 2,
    name: "Ramas",
  },
  projects: {
    id: "projects",
    number: 3,
    name: "Proyectos",
  },
  help: {
    id: "help",
    number: 4,
    name: "Unidades de ayuda",
  },
  payroll: {
    id: "payroll",
    number: 5,
    name: "Nómina",
  },
  verification: {
    id: "verification",
    number: 6,
    name: "Verificación",
  },
};

const Default = (args: IProgressCardController) => (
  <ProgressCardController {...args} />
);

Default.args = {
  steps: stepsMock,
  onComplete: () => console.log("Completado"),
};

export { Default };
export default story;
