import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdSettings,
  MdPrivacyTip,
  MdLogout,
  MdOutlineMarkunreadMailbox,
} from "react-icons/md";
import { props, parameters } from "../props";
import { Header } from "..";
import { Logo } from "./logo";

const meta = {
  title: "navigation/Header",
  component: Header,
  parameters: {
    ...parameters,
    layout: "fullscreen",
  },
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    navigation: {
      nav: {
        reactPortalId: "portals",
        title: "MENU",
        sections: [
          {
            subtitle: "Administrate",
            links: [
              {
                id: "privileges",
                label: "Privileges",
                icon: <MdKey />,
                path: "/privileges",
              },
              {
                id: "accounting",
                label: "Accounting",
                icon: <MdMeetingRoom />,
                path: "/accounting",
              },
              {
                id: "contacts",
                label: "Contacts",
                icon: <MdPhone />,
                path: "/contacts",
              },
              { id: "crm", label: "CRM", icon: <MdStarBorder />, path: "/crm" },
            ],
          },
          {
            subtitle: "Request",
            links: [
              {
                id: "documents",
                label: "Documents",
                icon: <MdBadge />,
                path: "/documents",
              },
              {
                id: "marketing",
                label: "Marketing",
                icon: <MdStarBorder />,
                path: "/marketing",
              },
              {
                id: "savings",
                label: "Savings",
                icon: <MdAccountBalanceWallet />,
                path: "/savings",
              },
              {
                id: "credit",
                label: "Credit",
                icon: <MdAccountBalance />,
                path: "/credit",
              },
            ],
          },
        ],
        actions: [
          {
            id: "action1",
            label: "Logout",
            action: () => console.log("Logout"),
            icon: <MdLogout />,
          },
        ],
        footerLabel: "©2025 - Inube",
        displaySubtitles: true,
        collapse: true,
      },
      breakpoint: "700px",
    },
    logoURL: <Logo />,
    user: {
      username: "Leonardo Garzón",
      client: "Sistemas Enlínea S.A",
      breakpoint: "600px",
    },
    links: {
      items: [
        {
          label: "Actualizar datos",
          path: "/update-data-assisted",
        },
        {
          label: "Crear PQRS",
          path: "/update-data-assisted",
        },
      ],
      breakpoint: "700px",
    },
    menu: [
      {
        id: "section1",
        title: "Profile",
        links: [
          {
            id: "link1",
            title: "Account Settings",
            path: "/account",
            iconBefore: <MdSettings />,
          },
          {
            id: "link2",
            title: "Privacy Settings",
            path: "/privacy",
            iconBefore: <MdPrivacyTip />,
          },
          {
            id: "link3",
            title: "Novelties (5)",
            path: "/novelties",
            iconBefore: <MdOutlineMarkunreadMailbox />,
          },
        ],
        divider: true,
      },
      {
        id: "section2",
        title: "Actions",
        actions: [
          {
            id: "action1",
            title: "Logout",
            action: () => console.log("Logout"),
            iconBefore: <MdLogout />,
          },
        ],
        divider: true,
      },
    ],
    unreadNotificationsAmount: 5,
  },
};

export default meta;
export { Default };
