import type { Meta, StoryObj } from "@storybook/react-vite";
import { Td } from "../Td";
import { Tr } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "data/Table/Tr",
  component: Tr,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Tr>;

type Story = StoryObj<typeof Tr>;

const Default: Story = {
  args: {
    border: "complete",
    borderDashed: false,
    zebra: false,
    children: (
      <>
        <Td>Cell 1</Td>
        <Td>Cell 2</Td>
        <Td>Cell 3</Td>
      </>
    ),
  },
  render: (args) => (
    <table style={{ borderCollapse: "collapse" }}>
      <Tr {...args} />
    </table>
  ),
};

export default meta;
export { Default };
