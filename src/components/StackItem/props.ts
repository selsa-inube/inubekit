const alignSelfProperties = [
  "auto",
  "flex-start",
  "flex-end",
  "center",
  "baseline",
  "stretch",
];
type IStackItemAlignSelfProperties = (typeof alignSelfProperties)[number];

const props = {
  children: {
    control: { type: "text" },
    description: "Content inside StackItem",
  },
  order: {
    control: { type: "number" },
    description: "Order of the flex item",
  },
  flexGrow: {
    control: { type: "number" },
    description: "Flex-grow property",
  },
  flexShrink: {
    control: { type: "number" },
    description: "Flex-shrink property",
  },
  flexBasis: {
    control: { type: "text" },
    description: "Flex-basis property",
  },
  alignSelf: {
    options: alignSelfProperties,
    control: { type: "select" },
    description: "Align-self property",
  },
};

export { props };
export type { IStackItemAlignSelfProperties };
