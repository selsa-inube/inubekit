interface IHeaderLink {
  label: string;
  path: string;
  icon?: React.JSX.Element;
}

const parameters = {
  docs: {
    description: {
      component:
        "The header is a user interface element within a web page that contains links to other sections of the website.",
    },
  },
};

const props = {
  navigation: {
    description:
      "The primary object that will organize and store the requisite paths for the correct operation of the Nav component is forthcoming and is required",
  },
  logoURL: {
    control: { type: "text" as const },
    description:
      "prop accepts a component to be used as the logo in the header. This component can be an image, an icon, stylized text or any other visual element that represents the brand identity.",
  },
  user: {
    description:
      "Object containing user information including username, client, and breakpoint for responsive behavior",
  },
  links: {
    description:
      "Object containing an array of link items and a breakpoint for responsive visibility",
  },
  menu: {
    description:
      "Array of menu sections with links and actions that appear in the user dropdown",
  },
  unreadNotificationsAmount: {
    description: "number of unread notifications related to the user",
  },
};

export { props, parameters };
export type { IHeaderLink };
