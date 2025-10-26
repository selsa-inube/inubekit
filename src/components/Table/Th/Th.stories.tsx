import type { Meta, StoryObj } from "@storybook/react-vite";
import { Th } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "data/Table/Th",
  component: Th,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Th>;

type Story = StoryObj<typeof Th>;

const Default: Story = {
  args: {
    action: true,
    children: "Header Cell",
  },
};

export default meta;
export { Default };
