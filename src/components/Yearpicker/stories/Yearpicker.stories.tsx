import type { Meta, StoryObj } from "@storybook/react-vite";
import { Yearpicker } from "..";
import { parameters, props } from "../props";
import { YearpickerController } from "./YearpickerController";

const meta = {
  title: "Inputs/Yearpicker",
  component: Yearpicker,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Yearpicker>;

type Story = StoryObj<typeof Yearpicker>;

const Default: Story = {
  args: {
    start: 2000,
    end: new Date().getFullYear(),
    order: "desc",
    placeholder: "Años",
    value: "",
  },
  render: (args) => <YearpickerController {...args} />,
};

export default meta;
export { Default };
