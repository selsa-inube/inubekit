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

const parameters = {
  docs: {
    description: {
      component:
        "Grid is a layout component that uses CSS Grid to organize content in rows and columns. It provides flexible control over spacing, alignment, and flow of child elements.",
    },
  },
};

const props = {
  children: {
    control: { disable: true },
    description: "Children elements placed inside the Grid.",
  },

  templateColumns: {
    description: "Defines the size and layout of the columns in the grid.",
    table: {
      defaultValue: { summary: "repeat(3, 1fr)" },
    },
  },

  templateRows: {
    description: "Defines the size and layout of the rows in the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  gap: {
    description:
      "Controls the spacing between grid cells, both horizontally and vertically.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  justifyItems: {
    options: justifyItemsProperties,
    description:
      "Defines how items are aligned on the horizontal axis within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  alignItems: {
    options: alignItemsProperties,
    description:
      "Controls the vertical alignment of the elements within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  justifyContent: {
    options: justifyContentProperties,
    description:
      "This property affects the horizontal alignment of the entire grid in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  alignContent: {
    options: alignContentProperties,
    description:
      "This property affects the vertical alignment of the grid content in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  autoColumns: {
    description:
      "Allows you to specify the automatic width of the grid columns. This means that the columns will automatically adjust according to the content.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  autoRows: {
    description:
      "Allows you to specify the automatic height of the grid columns. This means that the columns will automatically adjust according to the content.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  autoFlow: {
    description:
      "Controls how elements flow within the grid when there is not enough space in a row or column.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  height: {
    description: "Controls the height of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  width: {
    description: "Controls the width of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  margin: {
    description: "Sets the outer margin of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  padding: {
    description: "Sets the inner padding of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },
};

export { parameters, props };
export type {
  IGridJustifyContent,
  IGridAlignItems,
  IGridAutoFlow,
  IGridAlignContent,
  IGridJustifyItems,
};
