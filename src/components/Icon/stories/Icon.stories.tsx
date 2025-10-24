import type { Meta, StoryObj } from "@storybook/react-vite";
import { MdAdb } from "react-icons/md";
import { Icon } from "..";
import { props, parameters } from "../props";

const meta = {
  title: "data/Icon",
  component: Icon,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    appearance: "primary",
    icon: <MdAdb />,
    cursorHover: false,
    parentHover: false,
    disabled: false,
    spacing: "narrow",
    variant: "empty",
    shape: "rectangle",
    size: "24px",
  },
};

export default meta;
export { Default };
