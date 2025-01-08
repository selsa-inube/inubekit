const spacings = ["compact", "wide"] as const;
type IFieldsetSpacing = (typeof spacings)[number];
const types = ["body", "display", "headline", "label", "title"] as const;
const sizes = ["large", "medium", "small"] as const;

const parameters = {
  docs: {
    description: {
      component:
        "This component helps us to be able to separate content and title it.",
    },
  },
};

const props = {
  children: {
    description:
      "A prop that expects React nodes as its value, used to render the content inside the fieldset.",
  },
  height: {
    description: "Sets the height of the Stack component within the fieldset.",
  },
  legend: {
    description:
      "A string that represents the title or heading for the fieldset component.",
  },
  size: {
    control: "select",
    options: sizes,
    description: "Specifies the text size for the legend.",
  },
  spacing: {
    control: "select",
    options: spacings,
    description: "Controls the spacing of the legend.",
  },
  type: {
    control: "select",
    options: types,
    description: "Specifies the text type for the legend.",
  },
  width: {
    description: "Sets the width of the Stack component within the fieldset.",
  },
};

export { props, parameters, spacings };
export type { IFieldsetSpacing };
