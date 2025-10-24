const sizes = ["large", "medium", "small"] as const;

const types = ["body", "display", "headline", "label", "title"] as const;

type ILinkSize = (typeof sizes)[number];

type ILinkType = (typeof types)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Component designed to redirect the user when they click on the text. It should be used when the user interacts with some type of text and it should redirect them to another page",
    },
  },
};

const props = {
  children: {
    control: { type: "text" as const },
    description: "The text to be displayed",
  },
  hover: {
    control: { type: "boolean" as const },
    description: "Indicates when the mouse passes over the text",
  },
  path: {
    description:
      "is the path where the MenuLink is going to navigate and is required.",
  },
  rel: {
    description:
      "Specifies the relationship between the current and linked documents.",
  },
  size: {
    options: sizes,
    control: { type: "select" as const },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
  },
  target: {
    description: "Specifies where to open the linked document.",
  },
  type: {
    options: types,
    control: { type: "select" as const },
    description:
      "This prop is used to select one of the typography roles defined in the Foundations.",
    table: {
      defaultValue: { summary: "bodyLarge" },
    },
  },
};

export { parameters, props };
export type { ILinkSize, ILinkType };
