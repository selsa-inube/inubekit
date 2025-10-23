import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index";
import { props, parameters } from "./props";

const meta = {
  title: "data/Avatar",
  component: Avatar,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    unreadNotificationsAmount: 1,
    onClick: () => alert("Avatar clicked"),
  },
};

export default meta;
export { Default };
