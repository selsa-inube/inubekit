import { StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import {
  MdLogout,
  MdOutlineSavings,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdAttachMoney,
} from "react-icons/md";
import { MenuAction } from "../MenuAction";
import { MenuLink } from "../MenuLink";
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

export const SectionsWithTitles: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection title="ADMINISTRATE" divider={true}>
      <MenuLink
        title="My savings"
        path="/my-savings"
        iconBefore={<MdOutlineSavings />}
      />
      <MenuLink
        title="My credits"
        path="/my-credits"
        iconBefore={<MdOutlineAccountBalance />}
      />
    </MenuSection>
    <MenuSection title="REQUEST" divider={true}>
      <MenuLink
        title="Savings"
        path="/savings"
        iconBefore={<MdOutlineAccountBalanceWallet />}
      />
      <MenuLink title="Credit" path="/credit" iconBefore={<MdAttachMoney />} />
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
