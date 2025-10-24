import type { Meta, StoryObj } from "@storybook/react-vite";
import { CountdownBar } from ".";
import { props, parameters } from "./props";

const meta = {
  title: "feedback/CountdownBar",
  component: CountdownBar,
  parameters,
  argTypes: props,
} satisfies Meta<typeof CountdownBar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    height: "4px",
    appearance: "primary",
    duration: 3000,
    paused: false,
  },
};

export default meta;
export { Default };
