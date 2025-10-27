import { JSX } from "react";

const sizes = ["small", "large"] as const;
type IUserSize = (typeof sizes)[number];

interface IMenuSection {
  id: string;
  title?: string;
  divider?: boolean;
  links?: ILink[];
  actions?: IAction[];
}

interface ILink {
  id: string;
  title: string;
  path: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  disabled?: boolean;
}

interface IAction {
  id: string;
  title: string;
  description?: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  disabled?: boolean;
  action: () => void;
}

const parameters = {
  docs: {
    description: {
      component:
        "Component that allows the user to identify himself and locate himself next to the business unit",
    },
  },
};

const props = {
  username: {
    control: { type: "text" as const },
    description:
      "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
  },
  client: {
    control: { type: "text" as const },
    description:
      "indicates the name of the customer or company associated with the user.",
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description:
      "determines the size of the user component in the interface. The avatar will always be visible, but the name and client will be visible according to the size of the component.",
    table: {
      defaultValue: { summary: "large" },
    },
  },
  padding: {
    control: { type: "text" as const },
    description:
      "Sets the inner padding of the user component. Accepts spacing values.",
  },
  margin: {
    control: { type: "text" as const },
    description:
      "Sets the outer margin of the user component. Accepts spacing values.",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  menu: {
    control: { type: "object" as const },
    description:
      "An array of sections that contain either links or actions for the user menu. Each section can have a title, links, actions, and a divider.",
    table: {
      type: { summary: "IMenuSection[]" },
    },
  },
  menuTopPosition: {
    control: { type: "text" as const },
    description: "Sets the top position of the menu dropdown.",
    table: {
      defaultValue: { summary: "100%" },
    },
  },
  menuRightPosition: {
    control: { type: "text" as const },
    description: "Sets the right position of the menu dropdown.",
    table: {
      defaultValue: { summary: "16px" },
    },
  },
  unreadNotificationsAmount: {
    control: { type: "number" as const },
    description: "number of unread notifications related to the user",
    table: {
      defaultValue: { summary: "0" },
    },
  },
};

export { props, parameters };
export type { IUserSize, IMenuSection, ILink, IAction };
