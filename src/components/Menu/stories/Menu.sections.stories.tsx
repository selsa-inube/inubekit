import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import {
  MdLogout,
  MdOutlinePerson,
  MdOutlineMarkunreadMailbox,
  MdOutlineSettings,
  MdHelpOutline,
} from "react-icons/md";
import { MenuAction } from "../MenuAction";
import { MenuLink } from "../MenuLink";

const story = {
  title: "navigation/Menu",
  components: [Menu],
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const sections: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection divider={true}>
      <MenuLink
        title="Profile"
        path="/profile"
        iconBefore={<MdOutlinePerson />}
      />
      <MenuLink
        title="Messages"
        path="/messages"
        iconBefore={<MdOutlineMarkunreadMailbox />}
      />
    </MenuSection>
    <MenuSection divider={true}>
      <MenuLink
        title="Settings"
        path="/settings"
        iconBefore={<MdOutlineSettings />}
      />
      <MenuLink title="Help" path="/help" iconBefore={<MdHelpOutline />} />
    </MenuSection>
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
