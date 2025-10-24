import { Meta, StoryObj } from "@storybook/react-vite";
import { PhonefieldController } from "./Phonefield.Controller";
import { parameters, props } from "../props";

const meta = {
  title: "Inputs/Input/Phone",
  component: PhonefieldController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof PhonefieldController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "phone",
    label: "Phone",
    placeholder: "Enter phone number",
    required: true,
    type: "tel",
    size: "wide",
    status: "pending",
    hideDialCode: false,
    onDialValueChange: () => {},
  },
};

const WithValue: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "phone",
    label: "Phone",
    placeholder: "Enter phone number",
    required: true,
    type: "number",
    size: "wide",
    status: "pending",
    hideDialCode: false,
    initialDialValue: "+33",
    value: "1234567",
    onDialValueChange: () => {},
  },
};

export default meta;
export { Default, WithValue };
