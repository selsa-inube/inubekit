import { Meta, StoryObj } from "@storybook/react-vite";
import { Caption } from ".";

const meta = {
  title: "data/Table/Caption",
  component: Caption,
} satisfies Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

const Default: Story = {
  args: {
    children: "Caption text",
  },
};

export default meta;
export { Default };
