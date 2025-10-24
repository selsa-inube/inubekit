import { Meta, StoryObj } from "@storybook/react-vite";
import { NumberfieldController } from "./Numberfield.Controller";
import { parameters, props } from "../../Input/props";

const meta = {
  title: "Inputs/Input/Number",
  component: NumberfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof NumberfieldController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "quantity",
    label: "Quantity",
    placeholder: "Enter a number",
    required: true,
    type: "number",
    size: "wide",
    status: "pending",
  },
};

export default meta;
export { Default };
