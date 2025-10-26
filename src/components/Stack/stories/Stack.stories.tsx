import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../index";
import { props } from "../props";
import { Squares } from "./Squares";

const meta = {
  title: "layout/Stack",
  component: Stack,
  argTypes: props,
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof Stack>;

const Default: Story = {
  args: {
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
  },
  render: (args) => (
    <Stack {...args}>
      {Array.isArray(args.children)
        ? args.children.map((item, index) => (
            <Squares key={index} as={args.as || "div"} item={item} />
          ))
        : args.children}
    </Stack>
  ),
};

export default meta;
export { Default };
