import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { IMenuLink, MenuLink } from "../MenuLink";
import { props } from "./props";

const meta = {
  title: "navigation/Menu/MenuLink",
  component: MenuLink,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenuLink>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconBefore: <MdAndroid />,
    spacing: "wide",
    disabled: false,
    path: "/default-path",
  },
};

const IconAfter: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconAfter: <MdAndroid />,
    spacing: "wide",
    disabled: false,
    path: "/icon-after-path",
  },
};

const Disabled: Story = {
  args: {
    title: "Title",
    description: "Description",
    iconBefore: <MdAndroid />,
    spacing: "wide",
    disabled: true,
    path: "/disabled-path",
  },
};

export default meta;
export { Default, IconAfter, Disabled };
