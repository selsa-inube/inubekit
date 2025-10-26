import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../../Stack";
import { Tfoot } from ".";
import { Pagination } from "../Pagination";

const meta = {
  title: "data/Table/Tfoot",
  component: Tfoot,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Tfoot>;

type Story = StoryObj<typeof Tfoot>;

const Default: Story = {
  args: {
    children: (
      <Stack justifyContent="flex-end" width="500px">
        <Pagination
          firstEntryInPage={0}
          lastEntryInPage={0}
          totalRecords={0}
          handleStartPage={() => {}}
          handlePrevPage={() => {}}
          handleNextPage={() => {}}
          handleEndPage={() => {}}
        />
      </Stack>
    ),
  },
};

export default meta;
export { Default };
