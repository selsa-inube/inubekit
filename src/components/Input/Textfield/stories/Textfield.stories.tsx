import { Meta, StoryObj } from "@storybook/react-vite";
import { TextfieldController } from "./Textfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const meta = {
  title: "Inputs/Input/Text",
  component: TextfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<IInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    name: "Username",
    id: "Username",
    placeholder: "Write your full name",
    label: "Username",
    required: true,
    type: "text",
    size: "wide",
    status: "pending",
    maxLength: 20,
    minLength: 5,
  },
};

export default meta;
export { Default };
