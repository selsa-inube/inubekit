import type { Meta, StoryObj } from "@storybook/react-vite";
import { Th } from "../Th";
import { Thead } from ".";
import { Tr } from "../Tr";
import { props, parameters } from "./props";

const meta = {
  title: "data/Table/Thead",
  component: Thead,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Thead>;

type Story = StoryObj<typeof Thead>;

const Default: Story = {
  args: {
    children: (
      <Tr>
        <Th>Header 1</Th>
        <Th>Header 2</Th>
        <Th>Header 3</Th>
      </Tr>
    ),
  },
};

export default meta;
export { Default };
