import type { Meta, StoryObj } from "@storybook/react-vite";
import { Squares } from "../Stack/stories/Squares";
import { StackItem } from "./index";
import { Stack } from "../Stack";
import { props } from "./props";

const meta = {
  title: "layout/StackItem",
  component: StackItem,
  argTypes: props,
} satisfies Meta<typeof StackItem>;

type Story = StoryObj<typeof StackItem>;

const Default: Story = {
  args: {
    order: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
  },
  render: (args) => (
    <Stack direction="row" gap="20px" wrap="wrap">
      <StackItem flexGrow={1} flexBasis="300px" {...args}>
        <Squares item="Item 1" as="div" />
      </StackItem>
      <StackItem flexGrow={2} flexBasis="400px" {...args}>
        <Squares item="Item 2" as="div" />
      </StackItem>
      <StackItem flexGrow={1} flexBasis="200px" {...args}>
        <Squares item="Item 3" as="div" />
      </StackItem>
      <StackItem flexGrow={1} flexBasis="250px" {...args}>
        <Squares item="Item 4" as="div" />
      </StackItem>
    </Stack>
  ),
};

export default meta;
export { Default };
