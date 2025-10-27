import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "..";
import { ToggleController } from "./ToggleController";
import { props, parameters } from "../props";

const meta = {
  title: "inputs/Toggle",
  component: Toggle,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

const Default: Story = {
  args: {
    id: "id",
    disabled: false,
    name: "name",
    value: "value",
    checked: true,
    size: "large",
    margin: "0px",
    padding: "0px",
    children: "Accept Terms & Conditions and Personal Data policy.",
  },
  render: (args) => <ToggleController {...args} />,
};

export default meta;
export { Default };
