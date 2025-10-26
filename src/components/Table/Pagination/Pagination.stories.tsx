import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from ".";

const meta = {
  title: "data/Pagination",
  component: Pagination,
  argTypes: {
    firstEntryInPage: { control: { type: "number" as const } },
    lastEntryInPage: { control: { type: "number" as const } },
    totalRecords: { control: { type: "number" as const } },
    handleStartPage: { action: "startPage" },
    handlePrevPage: { action: "prevPage" },
    handleNextPage: { action: "nextPage" },
    handleEndPage: { action: "endPage" },
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

const Default: Story = {
  args: {
    firstEntryInPage: 0,
    lastEntryInPage: 10,
    totalRecords: 100,
    handleStartPage: () => console.log("Start Page clicked"),
    handlePrevPage: () => console.log("Prev Page clicked"),
    handleNextPage: () => console.log("Next Page clicked"),
    handleEndPage: () => console.log("End Page clicked"),
  },
};

export default meta;
export { Default };
