import {
  MdStarBorder,
  MdOutlineVpnKey,
  MdOutlineMeetingRoom,
  MdOutlineContacts,
  MdOutlineBadge,
  MdOutlineAccountBalanceWallet,
  MdOutlineAccountBalance,
  MdOutlineLogout,
  MdOutlineQuestionMark,
} from "react-icons/md";

const defaultFullscreenNavProps = {
  reactPortalId: "portals",
  title: "MENU",
  sections: [
    {
      subtitle: "ADMINISTRATE",
      links: [
        {
          id: "privileges",
          label: "Privileges",
          icon: <MdOutlineVpnKey />,
          path: "/privileges",
        },
        {
          id: "accounting",
          label: "Accounting",
          icon: <MdOutlineMeetingRoom />,
          path: "/accounting",
        },
        {
          id: "contacts",
          label: "Contacts",
          icon: <MdOutlineContacts />,
          path: "/contacts",
        },
        {
          id: "crm",
          label: "CRM",
          icon: <MdStarBorder />,
          path: "/crm",
        },
      ],
    },
    {
      subtitle: "REQUEST",
      links: [
        {
          id: "documents",
          label: "Documents",
          icon: <MdOutlineBadge />,
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
          icon: <MdOutlineAccountBalanceWallet />,
          path: "/savings",
        },
        {
          id: "credit",
          label: "Credit",
          icon: <MdOutlineAccountBalance />,
          path: "/credit",
        },
      ],
    },
  ],
  actions: [
    {
      id: "action1",
      label: "Signout",
      icon: <MdOutlineLogout />,
      action: () => console.log("Action 1 triggered"),
    },
    {
      id: "action2",
      label: "Help",
      icon: <MdOutlineQuestionMark />,
      action: () => console.log("Action 2 triggered"),
    },
  ],
  displaySubtitles: true,
  collapse: true,
};

export { defaultFullscreenNavProps };
