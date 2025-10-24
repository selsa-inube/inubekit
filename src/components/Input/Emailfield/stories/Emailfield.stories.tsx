import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailfieldController } from "./Emailfield.Controller";
import { parameters, props } from "../../Input/props";

const meta = {
  title: "Inputs/Input/Email",
  component: EmailfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof EmailfieldController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "email",
    label: "Email Address",
    placeholder: "Enter your email address",
    required: true,
    type: "email",
    size: "wide",
    status: "pending",
  },
};

export default meta;
export { Default };
