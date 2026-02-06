import type { Meta, StoryObj } from "@storybook/react-vite";
import { DynamicKeyController } from "./DynamicKey.Controller";
import { parameters, props } from "../props";

const meta = {
  title: "inputs/DynamicKey",
  component: DynamicKeyController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof DynamicKeyController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    id: "dynamic-key-1",
    length: 6,
    masked: false,
    type: "numeric",
    size: "wide",
    onChange: () => {},
    onComplete: (value) => console.log("onComplete:", value),
  },
};

const Focus: Story = {
  args: {
    id: "dynamic-key-2",
    length: 6,
    masked: false,
    type: "numeric",
    size: "wide",
    onChange: () => {},
    onComplete: () => {},
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const firstInput = canvasElement.querySelector("input");
    setTimeout(() => {
      firstInput?.focus();
    }, 100);
  },
};

const Masked: Story = {
  args: {
    id: "dynamic-key-3",
    length: 6,
    masked: true,
    type: "numeric",
    size: "wide",
    onChange: () => {},
    onComplete: () => {},
  },
};

const Type: Story = {
  args: {
    id: "dynamic-key-4",
    length: 8,
    masked: true,
    type: "alphanumeric",
    size: "wide",
    onChange: () => {},
    onComplete: () => {},
  },
};

const Size: Story = {
  args: {
    id: "dynamic-key-5",
    length: 6,
    masked: false,
    type: "numeric",
    size: "compact",
    onChange: () => {},
    onComplete: () => {},
  },
};

export default meta;
export { Default, Focus, Masked, Type, Size };
