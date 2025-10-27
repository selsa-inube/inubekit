import type { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  MdLogout,
  MdAutoFixHigh,
  MdOutlineCreate,
  MdLockOpen,
  MdOutlineColorLens,
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

const SectionsWithDescription: Story = {
  args: {
    children: (
      <>
        <MenuUser userName="Leonardo Garzon" businessUnit="Fondecom" avatar />
        <MenuSection title="ACTIONS" divider={true}>
          <MenuLink
            title="Create"
            description="Create an incident and connect with Fondecom"
            path="/my-savings"
            iconBefore={<MdAutoFixHigh />}
          />
          <MenuLink
            title="Edit"
            description="Edita una incidencia para agregar detalles más precisos y exactos"
            path="/my-credits"
            iconBefore={<MdOutlineCreate />}
          />
        </MenuSection>
        <MenuSection title="OPTIONS" divider={true}>
          <MenuLink
            title="Unlock"
            description="Unlock new benefits to create more than one incident at a time"
            path="/savings"
            iconBefore={<MdLockOpen />}
          />
          <MenuLink
            title="Themes"
            description="Select the theme to apply your colors to the app"
            path="/credit"
            iconBefore={<MdOutlineColorLens />}
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
export { SectionsWithDescription };
