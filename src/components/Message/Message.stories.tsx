import type { Meta, StoryObj } from "@storybook/react-vite";
import { Message } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "feedback/Message",
  component: Message,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Message>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: "Message",
    appearance: "success",
    size: "large",
    fullwidth: true,
    width: "320px",
    description: "This is a message description",
    primaryActionText: "Continue",
    secondaryActionText: "Cancel",
    primaryAction: () => alert("Primary action clicked"),
    secondaryAction: () => alert("Secondary action clicked"),
  },
};

export default meta;
export { Default };
