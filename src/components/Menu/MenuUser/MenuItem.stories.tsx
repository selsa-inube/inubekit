import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import { MenuUser, IMenuUser } from ".";
import { props } from "./props";

const meta = {
  title: "navigation/Menu/MenuUser",
  component: MenuUser,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenuUser>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    userName: "Name",
    businessUnit: "Business Unit",
    avatar: true,
    padding: "12px 16px",
    gap: "12px",
  },
};

export default meta;
export { Default };
