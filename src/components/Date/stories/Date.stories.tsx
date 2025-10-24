import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "../props";
import { DateController } from "./DateController";

const meta = {
  title: "inputs/Date",
  component: DateController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof DateController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    label: "Date",
    name: "Date",
    id: "Date",
    value: "",
    size: "wide",
    disabled: false,
    required: false,
    message: "",
    fullwidth: false,
  },
};

export default meta;
export { Default };
