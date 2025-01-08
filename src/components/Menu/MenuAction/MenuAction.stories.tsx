import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { props } from "./props";
import { IMenuAction, MenuAction } from ".";

const story = {
  title: "navigation/Menu/MenuAction",
  components: [MenuAction],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<IMenuAction> = (args) => <MenuAction {...args} />;
Default.args = {
  title: "Title",
  description: "Description",
  iconBefore: <MdAndroid />,
  spacing: "wide",
  disabled: false,
  action: () => console.log("MenuAction clicked!"),
};

export const IconAfter: StoryFn<IMenuAction> = (args) => (
  <MenuAction {...args} />
);
IconAfter.args = {
  title: "Title",
  description: "Description",
  iconAfter: <MdAndroid />,
  spacing: "wide",
  disabled: false,
  action: () => console.log("MenuAction clicked with iconAfter!"),
};

export const Disabled: StoryFn<IMenuAction> = (args) => (
  <MenuAction {...args} />
);
Disabled.args = {
  ...Default.args,
  disabled: true,
  action: () => console.log("Disabled action clicked!"),
};

export default story;
