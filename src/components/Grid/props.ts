const justifyItemsProperties = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "left",
  "right",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
  "self-start",
  "self-end",
  "baseline",
  "first baseline",
  "last baseline",
  "legacy right",
  "legacy left",
  "legacy center",
] as const;
type IGridJustifyItems = (typeof justifyItemsProperties)[number];

const alignItemsProperties = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "self-start",
  "self-end",
  "baseline",
  "first baseline",
  "last baseline",
  "safe center",
  "unsafe center",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset",
] as const;
type IGridAlignItems = (typeof alignItemsProperties)[number];

const justifyContentProperties = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "left",
  "right",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;
type IGridJustifyContent = (typeof justifyContentProperties)[number];

const alignContentProperties = [
  "baseline",
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;
type IGridAlignContent = (typeof alignContentProperties)[number];

const autoFlowProperties = [
  "row",
  "column",
  "dense",
  "row dense",
  "column dense",
] as const;
type IGridAutoFlow = (typeof autoFlowProperties)[number];

const props = {
  children: {
    options: "",
    control: { type: "string" },
    description: "Children elements placed inside the Grid.",
  },

  templateColumns: {
    type: { type: "string" },
    description: "Defines the size and layout of the columns in the grid.",
    table: {
      defaultValue: { summary: "repeat(3, 1fr)" },
    },
  },

  templateRows: {
    type: { type: "string" },
    description: "Defines the size and layout of the rows in the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  gap: {
    type: { name: "string", required: false },
    description:
      "Controls the spacing between grid cells, both horizontally and vertically.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  justifyItems: {
    options: justifyItemsProperties,
    control: { type: "select" },
    description:
      "Defines how items are aligned on the horizontal axis within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  alignItems: {
    options: alignItemsProperties,
    control: { type: "select" },
    description:
      "Controls the vertical alignment of the elements within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  justifyContent: {
    options: justifyContentProperties,
    control: { type: "select" },
    description:
      "This property affects the horizontal alignment of the entire grid in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  alignContent: {
    options: alignContentProperties,
    control: { type: "select" },
    description:
      "This property affects the vertical alignment of the grid content in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  autoColumns: {
    type: { name: "string", required: false },
    description:
      "Allows you to specify the automatic width of the grid columns. This means that the columns will automatically adjust according to the content.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  autoRows: {
    type: { name: "string", required: false },
    description:
      "Allows you to specify the automatic height of the grid columns. This means that the columns will automatically adjust according to the content.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  autoFlow: {
    type: { name: "string", required: false },
    description:
      "Controls how elements flow within the grid when there is not enough space in a row or column.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  height: {
    type: { name: "string", required: false },
    description: "Controls the height of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  width: {
    type: { name: "string", required: false },
    description: "Controls the width of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  margin: {
    type: { name: "string", required: false },
    description: "Sets the outer margin of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  padding: {
    type: { name: "string", required: false },
    description: "Sets the inner padding of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },
};

export { props };
export type {
  IGridJustifyContent,
  IGridAlignItems,
  IGridAutoFlow,
  IGridAlignContent,
  IGridJustifyItems,
};
