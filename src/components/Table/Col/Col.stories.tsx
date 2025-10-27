import { Meta, StoryObj } from "@storybook/react-vite";
import { Col } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "data/Table/Col",
  component: Col,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Col>;

type Story = StoryObj<typeof Col>;

const Default: Story = {
  args: {
    span: 1,
  },
};

export default meta;
export { Default };
