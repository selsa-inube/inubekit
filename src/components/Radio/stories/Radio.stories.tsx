import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "..";
import { RadioController } from "./Radio.Controller";
import { parameters, props } from "../props";

const meta = {
  title: "Inputs/Radio",
  component: Radio,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => <RadioController {...args} />,
  args: {
    id: "radio1",
    label: "Label",
    name: "radioGroup",
    value: "option1",
    checked: false,
    disabled: false,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      console.log(`Radio value: ${e.target.value}`),
  },
};

export default meta;
export { Default };
