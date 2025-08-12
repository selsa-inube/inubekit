import { StoryFn } from "@storybook/react-vite";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { MenuSection } from ".";
import { MenuAction } from "../MenuAction";
import { ElementType } from "react";

const story = {
  title: "navigation/Menu/MenuSection",
  components: [MenuSection],
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: "radio",
      options: ["wide", "compact"],
    },
    divider: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
  },
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn = (args) => (
  <MenuSection {...args}>
    <MenuAction
      title="Configuration"
      description="Adjust the details of your project"
      iconAfter={<MdAndroid />}
      action={() => console.log("config")}
    />
    <MenuAction
      title="Account"
      description="See your personal settings"
      iconAfter={<MdAndroid />}
      action={() => console.log("account")}
    />
  </MenuSection>
);

Default.args = {
  title: "Heading 1",
  spacing: "wide",
  divider: true,
};

export default story;
