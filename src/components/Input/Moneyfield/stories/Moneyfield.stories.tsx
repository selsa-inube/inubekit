import { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props } from "../../Input/props";
import { MoneyfieldController } from "./Moneyfield.Controller";

const meta = {
  title: "Inputs/Input/Money",
  component: MoneyfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof MoneyfieldController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "amount",
    label: "Amount",
    placeholder: "Enter amount",
    required: true,
    type: "money",
    size: "wide",
    status: "pending",
    value: "",
  },
};

export default meta;
export { Default };
