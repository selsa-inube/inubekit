const props = {
  parameters: {
    docs: {
      description: {
        component:
          "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
      },
    },
  },
  portalId: {
    description: "id of the portal element",
  },
  navigation: {
    description:
      "(objects): shall be designed to accept an array of objects with a predetermined structure, as specified below: Each object shall contain the following attributes",
  },
  actions: {
    description: "an array of actions that can be performed from the menu.",
  },
  footerLabel: {
    description: "text that will be displayed in the footer of the menu.",
  },
  footerLogo: {
    description:
      "URL of an image that will be displayed as a logo in the footer.",
  },
  logoutPath: {
    description: "path to the logout page",
  },
};

export { props };
