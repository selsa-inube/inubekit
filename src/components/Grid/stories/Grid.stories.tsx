import type { Meta, StoryObj } from "@storybook/react-vite";
import { StyledSquare } from "./stories.styles";
import { parameters, props } from "../props";
import { Grid } from "..";

const meta = {
  title: "layout/Grid",
  component: Grid,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    templateColumns: "repeat(3, 1fr)",
    gap: "28px",
    templateRows: "auto",
    justifyItems: "start",
    alignItems: "start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    autoColumns: "auto",
    autoRows: "auto",
    autoFlow: "row",
    margin: "0px",
    padding: "0px",
    height: "auto",
    width: "auto",
    children: (
      <>
        <StyledSquare>Item 1</StyledSquare>
        <StyledSquare>Item 2</StyledSquare>
        <StyledSquare>Item 3</StyledSquare>
      </>
    ),
  },
};

export default meta;
export { Default };
