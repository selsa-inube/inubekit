import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxController } from "./Checkbox.Controller";
import { parameters, props } from "../props";

const meta = {
  title: "Inputs/Checkbox",
  component: CheckboxController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof CheckboxController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    id: "checkbox1",
    label: "Label",
    name: "checkboxGroup",
    value: "checkbox-value",
    checked: false,
    indeterminate: false,
    disabled: false,
    onChange: () => {},
  },
};

export default meta;
export { Default };
