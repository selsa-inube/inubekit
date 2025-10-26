import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tbody } from ".";
import { Td } from "../Td";
import { Tr } from "../Tr";

const meta = {
  title: "data/Table/Tbody",
  component: Tbody,
} satisfies Meta<typeof Tbody>;

type Story = StoryObj<typeof Tbody>;

const Default: Story = {
  args: {
    children: (
      <>
        <Tr border="bottom">
          <Td>Data 1</Td>
          <Td>Data 2</Td>
          <Td>Data 3</Td>
          <Td>Data 4</Td>
          <Td>Data 5</Td>
        </Tr>
        <Tr border="bottom">
          <Td>Data 1.1</Td>
          <Td>Data 2.1</Td>
          <Td>Data 3.1</Td>
          <Td>Data 4.1</Td>
          <Td>Data 5.1</Td>
        </Tr>
        <Tr border="bottom">
          <Td>Data 1.2</Td>
          <Td>Data 2.2</Td>
          <Td>Data 3.2</Td>
          <Td>Data 4.2</Td>
          <Td>Data 5.2</Td>
        </Tr>
        <Tr border="bottom">
          <Td>Data 1.3</Td>
          <Td>Data 2.3</Td>
          <Td>Data 3.3</Td>
          <Td>Data 4.3</Td>
          <Td>Data 5.3</Td>
        </Tr>
        <Tr border="bottom">
          <Td>Data 1.4</Td>
          <Td>Data 2.4</Td>
          <Td>Data 3.4</Td>
          <Td>Data 4.4</Td>
          <Td>Data 5.4</Td>
        </Tr>
      </>
    ),
  },
  render: (args) => (
    <table style={{ borderCollapse: "collapse" }}>
      <Tbody {...args} />
    </table>
  ),
};

export default meta;
export { Default };
