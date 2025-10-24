import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "data/Text",
  component: Text,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Text>;

export default meta;

const Default: Story = {
  args: {
    appearance: "dark",
    as: "h1",
    children: "Title with the Text component",
    cursorHover: true,
    disabled: false,
    ellipsis: false,
    margin: "20px 22px 23px 24px",
    padding: "5px",
    parentHover: false,
    size: "large",
    textAlign: "start",
    type: "body",
    weight: "normal",
  },
};

type Story = StoryObj<typeof meta>;
export { Default };
