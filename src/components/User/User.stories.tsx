import type { Meta, StoryObj } from "@storybook/react-vite";
import { MdManageAccounts, MdLogout } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { User } from ".";
import { IMenuSection, props, parameters } from "./props";
import { ElementType } from "react";

const meta = {
  title: "data/User",
  component: User,
  parameters: {
    ...parameters,
    layout: "fullscreen",
  },
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
          <div></div>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof User>;

type Story = StoryObj<typeof User>;

const sections: IMenuSection[] = [
  {
    id: "section-1",
    links: [
      {
        id: "link-1",
        title: "Cambiar cliente",
        iconBefore: <MdManageAccounts />,
        path: "/account",
      },
    ],
  },
  {
    id: "section-2",
    actions: [
      {
        id: "action-1",
        title: "Cerrar sesión",
        description: "Log out from your account",
        iconBefore: <MdLogout />,
        action: () => console.log("Logged out"),
      },
    ],
    divider: true,
  },
];

const Default: Story = {
  args: {
    username: "Leonardo Garzón",
    client: "Sistemas Enlínea S.A",
    size: "large",
    menu: sections,
    padding: "8px 16px",
    menuTopPosition: "100%",
    menuRightPosition: "16px",
    unreadNotificationsAmount: 3,
    margin: "0px",
  },
};

export default meta;
export { Default };
