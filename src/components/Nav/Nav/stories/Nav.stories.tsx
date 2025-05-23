import { BrowserRouter, useLocation } from "react-router-dom";
import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdLogout,
} from "react-icons/md";

import { Nav, INav } from "..";
import { props, parameters } from "../props";

const story = {
  title: "navigation/Nav",
  components: Nav,
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const Default = (args: INav) => {
  const location = useLocation();

  const updatedNavigation = {
    ...args.navigation,
    sections: Object.fromEntries(
      Object.entries(args.navigation.sections).map(([key, section]) => [
        key,
        {
          ...section,
          links: Object.fromEntries(
            Object.entries(section.links).map(([linkKey, link]) => [
              linkKey,
              {
                ...link,
                isActive: location.pathname === link.path,
              },
            ]),
          ),
        },
      ]),
    ),
  };

  return <Nav {...{ ...args, navigation: updatedNavigation }} />;
};

Default.args = {
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        name: "ADMINISTRATE",
        links: {
          text: {
            id: "text",
            label: "Text",
            icon: <MdKey />,
            path: "/components/text",
          },
          textfield: {
            id: "textfield",
            label: "Textfield",
            icon: <MdMeetingRoom />,
            path: "/components/textfield",
          },
          textarea: {
            id: "textarea",
            label: "Textarea",
            icon: <MdPhone />,
            path: "/components/textarea",
          },
          crm: {
            id: "crm",
            label: "CRM",
            icon: <MdStarBorder />,
            path: "/crm",
          },
        },
      },
      request: {
        name: "REQUEST",
        links: {
          documents: {
            id: "documents",
            label: "Documents",
            icon: <MdBadge />,
            path: "/documents",
          },
          marketing: {
            id: "marketing",
            label: "Marketing",
            icon: <MdStarBorder />,
            path: "/marketing",
          },
          savings: {
            id: "savings",
            label: "Savings",
            icon: <MdAccountBalanceWallet />,
            path: "/savings",
          },
          credit: {
            id: "credit",
            label: "Credit",
            icon: <MdAccountBalance />,
            path: "/credit",
          },
        },
      },
    },
  },
  actions: [
    {
      id: "action1",
      label: "Action 1",
      icon: <MdLogout />,
      action: () => console.log("Action 1 triggered"),
    },
    {
      id: "action2",
      label: "Action 2",
      icon: <MdLogout />,
      action: () => console.log("Action 2 triggered"),
    },
  ],
  collapse: true,
};

export { Default };
export default story;
