import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuUser, IMenuUser } from ".";
import { props } from "./props";

const story = {
  title: "navigation/Menu/MenuUser",
  components: [MenuUser],
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

export const Default: StoryFn<IMenuUser> = (args) => <MenuUser {...args} />;
Default.args = {
  userName: "Name",
  businessUnit: "Business Unit",
  avatar: true,
  padding: "12px 16px",
  gap: "12px",
};

export default story;
