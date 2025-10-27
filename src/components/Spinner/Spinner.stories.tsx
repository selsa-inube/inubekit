import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from ".";
import { props, parameters } from "./props";

const meta = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
  args: {
    size: "medium",
    appearance: "primary",
    transparent: false,
  },
  argTypes: props,
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export default meta;
export const Default: Story = {};
