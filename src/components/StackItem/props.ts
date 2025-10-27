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
    control: { disable: true },
    description: "Content inside StackItem",
  },
  order: {
    control: { type: "number" as const },
    description: "Order of the flex item",
  },
  flexGrow: {
    control: { type: "number" as const },
    description: "Flex-grow property",
  },
  flexShrink: {
    control: { type: "number" as const },
    description: "Flex-shrink property",
  },
  flexBasis: {
    control: { type: "text" as const },
    description: "Flex-basis property",
  },
  alignSelf: {
    options: alignSelfProperties,
    control: { type: "select" as const },
    description: "Align-self property",
  },
};

export { props };
export type { IStackItemAlignSelfProperties };
