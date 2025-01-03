import { Squares } from "../Stack/stories/Squares";
import { IStackItem, StackItem } from "./index";
import { Stack } from "../Stack";
import { props } from "./props";
import { JSX } from "react/jsx-runtime";

const story = {
  title: "layout/StackItem",
  component: StackItem,
  argTypes: props,
};

const Default = (args: JSX.IntrinsicAttributes & IStackItem) => (
  <Stack direction="row" gap="20px" wrap="wrap">
    <StackItem flexGrow={1} flexBasis="300px" {...args}>
      <Squares item="Item 1" />
    </StackItem>
    <StackItem flexGrow={2} flexBasis="400px" {...args}>
      <Squares item="Item 2" />
    </StackItem>
    <StackItem flexGrow={1} flexBasis="200px" {...args}>
      <Squares item="Item 3" />
    </StackItem>
    <StackItem flexGrow={1} flexBasis="250px" {...args}>
      <Squares item="Item 4" />
    </StackItem>
  </Stack>
);

Default.args = {
  order: 0,
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  alignSelf: "auto",
};

export default story;
export { Default };
