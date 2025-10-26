import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "..";
import { TabsController } from "./TabsController";
import { props, parameters } from "../props";
import { MdErrorOutline, MdOutlineReportProblem } from "react-icons/md";

const meta = {
  title: "navigation/Tabs",
  component: Tabs,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

const Default: Story = {
  args: {
    tabs: [
      {
        id: "generalInformation",
        disabled: false,
        label: "General Information",
      },
      { id: "branches", disabled: false, label: "Branches" },
      {
        id: "projects",
        disabled: false,
        label: "Projects",
        icon: {
          icon: <MdOutlineReportProblem />,
          appearance: "warning",
        },
      },
      {
        id: "events",
        disabled: true,
        label: "Events",
        icon: {
          icon: <MdErrorOutline />,
          appearance: "gray",
        },
      },
      { id: "aidBudget", disabled: false, label: "Aid budget units" },
      { id: "Savings products", disabled: false, label: "Savings products" },
      { id: "Credit products", disabled: false, label: "Credit products" },
      { id: "Purchase products", disabled: false, label: "Purchase products" },
      {
        id: "Credit lines",
        disabled: false,
        label: "Credit lines",
        icon: {
          icon: <MdErrorOutline />,
          appearance: "danger",
        },
      },
      { id: "Branch offices", disabled: false, label: "Branch offices" },
      {
        id: "Banking correspondent",
        disabled: false,
        label: "Banking correspondent",
      },
    ],
    selectedTab: "generalInformation",
    scroll: true,
  },
  render: (args) => <TabsController {...args} />,
};

export default meta;
export { Default };
