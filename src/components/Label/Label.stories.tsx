import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "./props";
import { Label } from ".";

const meta = {
  title: "inputs/Label",
  component: Label,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    htmlFor: "id",
    children: "Label Text",
    disabled: false,
    size: "large",
    focused: false,
    invalid: false,
    margin: "0px",
    padding: "0px",
  },
};

export default meta;
export { Default };
