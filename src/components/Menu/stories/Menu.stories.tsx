import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { Menu, IMenu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MenuAction } from "../MenuAction";
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

const Default: Story = {
  args: {
    children: (
      <>
        <MenuUser userName="Name" businessUnit="Business Unit" avatar />
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
export { Default };
