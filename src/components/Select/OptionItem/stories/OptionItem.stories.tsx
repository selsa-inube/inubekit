import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "../props";
import { OptionItem } from "../index";
import { OptionItemController } from "./OptionItem.controller";

const meta = {
  title: "Inputs/Select/OptionItem",
  component: OptionItem,
  parameters,
  argTypes: props,
} satisfies Meta<typeof OptionItem>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => <OptionItemController {...args} />,
  args: {
    id: "Item 1",
    label: "Item 1",
    picker: false,
    checked: false,
  },
};

export default meta;
export { Default };
