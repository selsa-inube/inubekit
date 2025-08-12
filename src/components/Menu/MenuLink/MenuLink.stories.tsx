import { StoryFn } from "@storybook/react-vite";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { IMenuLink, MenuLink } from "../MenuLink";
import { ElementType } from "react";

const story = {
  title: "navigation/Menu/MenuLink",
  component: MenuLink,
  tags: ["autodocs"],
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<IMenuLink> = (args) => <MenuLink {...args} />;
Default.args = {
  title: "Title",
  description: "Description",
  iconBefore: <MdAndroid />,
  spacing: "wide",
  disabled: false,
  path: "/default-path",
};

export const IconAfter: StoryFn<IMenuLink> = (args) => <MenuLink {...args} />;
IconAfter.args = {
  title: "Title",
  description: "Description",
  iconAfter: <MdAndroid />,
  spacing: "wide",
  disabled: false,
  path: "/icon-after-path",
};

export const Disabled: StoryFn<IMenuLink> = (args) => <MenuLink {...args} />;
Disabled.args = {
  ...Default.args,
  disabled: true,
  path: "/disabled-path",
};

export default story;
