import { StyledSquare } from "./stories.styles";
import { props } from "../props";
import { Grid, IGrid } from "..";

const story = {
  title: "layout/Grid",
  components: [Grid],
  argTypes: props,
};

const Default = (args: IGrid) => (
  <Grid {...args}>
    <StyledSquare>Item 1</StyledSquare>
    <StyledSquare>Item 2</StyledSquare>
    <StyledSquare>Item 3</StyledSquare>
  </Grid>
);

Default.args = {
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
};

export { Default };
export default story;
