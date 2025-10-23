import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    dashed: false,
    marginTop: "24px",
    marginBottom: "8px",
  },
};

export default meta;
export { Default };
