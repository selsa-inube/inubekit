import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationsBadge } from "./index";
import { props } from "./props";

const meta = {
  title: "data/Avatar/notificationsBadge",
  component: NotificationsBadge,
  argTypes: props,
} satisfies Meta<typeof NotificationsBadge>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    unreadNotificationsAmount: 3,
  },
};

export default meta;
export { Default };
