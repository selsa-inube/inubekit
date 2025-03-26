const props = {
  parameters: {
    docs: {
      description: {
        component:
          "A versatile side navigation component, which allows you to nest links, from a full screen perspective",
      },
    },
  },
  reactPortalId: {
    description: "id of the portal element",
  },
  title: {
    description: "corresponds to the menu title",
  },
  sections: {
    description: "an array of sections that can be performed from the menu.",
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
  displaySubtitles: {
    description: "value that determines whether the subtitles will be visible",
  },
  collapse: {
    description: "value that determines whether sections will be collapsible",
  },
};

export { props };
