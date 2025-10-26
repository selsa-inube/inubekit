import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonLine } from ".";
import { props, parameters } from "./props";

const meta = {
  title: "feedback/SkeletonLine",
  component: SkeletonLine,
  parameters,
  argTypes: props,
} satisfies Meta<typeof SkeletonLine>;

type Story = StoryObj<typeof SkeletonLine>;

const Default: Story = {
  args: {
    width: "100%",
    height: "24px",
    animated: false,
  },
};

export default meta;
export { Default };
