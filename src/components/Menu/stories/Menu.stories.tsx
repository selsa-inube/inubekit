import { StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MdLogout } from "react-icons/md";
import { MenuAction } from "../MenuAction";
import { ElementType } from "react";

const story = {
  title: "navigation/Menu",
  components: [Menu],
  tags: ["autodocs"],
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection divider={true}>
      <MenuAction
        title="Logout"
        iconBefore={<MdLogout />}
        action={() => console.log("logout")}
      />
    </MenuSection>
  </Menu>
);

export default story;
