import type { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  MdLogout,
  MdOutlineSavings,
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdAttachMoney,
} from "react-icons/md";
import { Menu, IMenu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MenuAction } from "../MenuAction";
import { MenuLink } from "../MenuLink";
import { props } from "../props";

const meta = {
  title: "navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenu>;

type Story = StoryObj<typeof meta>;

const SectionsWithTitles: Story = {
  args: {
    children: (
      <>
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
          <MenuLink
            title="Credit"
            path="/credit"
            iconBefore={<MdAttachMoney />}
          />
        </MenuSection>
        <MenuSection divider={true}>
          <MenuAction
            title="Logout"
            iconBefore={<MdLogout />}
            action={() => console.log("logout")}
          />
        </MenuSection>
      </>
    ),
  },
};

export default meta;
export { SectionsWithTitles };
