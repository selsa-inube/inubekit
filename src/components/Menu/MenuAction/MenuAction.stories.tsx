import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { props } from "./props";
import { IMenuAction, MenuAction } from ".";

const meta = {
  title: "navigation/Menu/MenuAction",
  component: MenuAction,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenuAction>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconBefore: <MdAndroid />,
    spacing: "wide",
    disabled: false,
    action: () => console.log("MenuAction clicked!"),
  },
};

const IconAfter: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconAfter: <MdAndroid />,
    spacing: "wide",
    disabled: false,
    action: () => console.log("MenuAction clicked with iconAfter!"),
  },
};

const Disabled: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconBefore: <MdAndroid />,
    spacing: "wide",
    disabled: true,
    action: () => console.log("Disabled action clicked!"),
  },
};

export default meta;
export { Default, IconAfter, Disabled };
