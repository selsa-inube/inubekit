import { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { ElementType, ReactNode } from "react";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MenuAction } from "../MenuAction";

const meta = {
  title: "navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Menu component that displays a list of actions and user information without icons.",
      },
    },
  },
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof meta>;

const menuContent: ReactNode = (
  <>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection divider={true}>
      <MenuAction
        title="Show the nearest calendar"
        action={() => console.log("action")}
      />
      <MenuAction
        title="Add a secondary incident"
        action={() => console.log("action")}
      />
      <MenuAction
        title="Link a new issue "
        action={() => console.log("action")}
      />
    </MenuSection>

    <MenuSection divider={true}>
      <MenuAction title="Logout" action={() => console.log("action")} />
    </MenuSection>
  </>
);

const WithoutIcons: Story = {
  args: {
    children: menuContent,
  },
};

export default meta;
export { WithoutIcons };
