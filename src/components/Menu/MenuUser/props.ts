const props = {
  userName: {
    control: { type: "text" as const },
    description: "The user name to display",
  },
  businessUnit: {
    control: { type: "text" as const },
    description:
      "Optional business unit or secondary text to display below the user name",
  },
  avatar: {
    control: { type: "boolean" as const },
    description: "Whether to display the avatar icon",
    table: {
      defaultValue: { summary: "true" },
    },
  },
  padding: {
    control: { type: "text" as const },
    description: "Custom padding for the menu user component",
    table: {
      defaultValue: { summary: "12px 16px" },
    },
  },
  gap: {
    control: { type: "text" as const },
    description: "Gap between the avatar and text content",
    table: {
      defaultValue: { summary: "12px" },
    },
  },
};

export { props };
