import { Meta, StoryObj } from "@storybook/react-vite";
import { TelfieldController } from "./Telfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const meta = {
  title: "Inputs/Input/Tel",
  component: TelfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<IInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "tel",
    label: "tel",
    placeholder: "Enter your tel number",
    required: true,
    type: "tel",
    size: "wide",
    status: "pending",
  },
};

export default meta;
export { Default };
