import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "./props";
import { SkeletonIcon } from ".";

const meta = {
  title: "feedback/SkeletonIcon",
  component: SkeletonIcon,
  parameters,
  argTypes: props,
} satisfies Meta<typeof SkeletonIcon>;

type Story = StoryObj<typeof SkeletonIcon>;

const Default: Story = {
  args: {
    size: "24px",
    animated: false,
  },
};

export default meta;
export { Default };
