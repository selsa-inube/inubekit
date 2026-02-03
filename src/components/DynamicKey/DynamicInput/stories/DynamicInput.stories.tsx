import type { Meta, StoryObj } from "@storybook/react-vite";
import { DynamicInputController } from "./DynamicInput.Controller";
import { parameters, props } from "../props";

const meta = {
  title: "inputs/DynamicKey/DynamicInput",
  component: DynamicInputController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof DynamicInputController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    placeholder: "",
    masked: false,
    type: "numeric",
    size: "wide",
    onChange: () => {},
  },
};

const PlaceHolder: Story = {
  args: {
    placeholder: "A",
    masked: false,
    type: "numeric",
    size: "wide",
    onChange: () => {},
  },
};

const Focus: Story = {
  args: {
    placeholder: "A",
    masked: false,
    type: "numeric",
    size: "wide",
    onChange: () => {},
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const input = canvasElement.querySelector("input");
    setTimeout(() => {
      input?.focus();
    }, 100);
  },
};

const Masked: Story = {
  args: {
    placeholder: "",
    masked: true,
    type: "numeric",
    size: "wide",
    onChange: () => {},
  },
};

export default meta;
export { Default, PlaceHolder, Focus, Masked };
