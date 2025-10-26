import type { Meta, StoryObj } from "@storybook/react-vite";
import { Td } from "..";
import { parameters, props } from "../props";
import { TdController } from "./TdController";

const meta = {
  title: "data/Table/Td",
  component: Td,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Td>;

type Story = StoryObj<typeof Td>;

const Default: Story = {
  args: {
    children: "content",
  },
  render: (args) => <TdController {...args} />,
};

export default meta;
export { Default };
