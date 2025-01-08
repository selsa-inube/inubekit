import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { IMenuLink, MenuLink } from "../MenuLink";

const story = {
  title: "navigation/Menu/MenuLink",
  components: [MenuLink],
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
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
