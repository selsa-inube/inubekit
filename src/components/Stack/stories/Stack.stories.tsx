import { Stack, IStack } from "../index";
import { props } from "../props";
import { Squares } from "./Squares";

const story = {
  title: "layout/Stack",
  components: [Stack],
  argTypes: props,
};

const Default = (args: IStack) => (
  <Stack {...args}>
    {Array.isArray(args.children)
      ? args.children.map((item, index) => (
          <Squares key={index} as={args.as || "div"} item={item} />
        ))
      : args.children}
  </Stack>
);

Default.args = {
  children: [...Array(6 + 1).keys()].slice(1),
  as: "div",
  gap: "10px",
  wrap: "wrap",
  direction: "row",
  justifyContent: "unset",
  alignItems: "initial",
  alignContent: "unset",
  height: "100%",
  width: "100%",
  margin: "0px",
  padding: "0px 20px",
};

export default story;

export { Default };
