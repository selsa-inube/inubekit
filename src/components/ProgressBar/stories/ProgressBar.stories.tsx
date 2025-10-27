import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "..";
import { parameters, props } from "../props";
import { ProgressBarController } from "./ProgressBar.controller";

const meta = {
  title: "feedback/ProgressBar",
  component: ProgressBar,
  parameters,
  argTypes: {
    ...props,
    onComplete: { action: "onAnimationEnd" },
  },
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    height: "4px",
    appearance: "primary",
    progress: 45,
  },
};

const Runtime: Story = {
  render: (args) => (
    <ProgressBarController
      {...args}
      run={true}
      onComplete={(e) => {
        console.log("Animation complete", e);
      }}
    />
  ),
  args: {
    height: "4px",
    appearance: "primary",
    progress: 0,
  },
};

export default meta;
export { Default, Runtime };
