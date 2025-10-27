import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "../index";
import { TabController } from "./TabController";
import { props } from "../props";
import { MdOutlineReportProblem } from "react-icons/md";

const meta = {
  title: "navigation/Tabs/Tab",
  component: Tab,
  argTypes: props,
} satisfies Meta<typeof Tab>;

type Story = StoryObj<typeof Tab>;

const Default: Story = {
  args: {
    id: "thisIsAnId",
    disabled: false,
    label: "General Information",
    icon: {
      icon: <MdOutlineReportProblem />,
      appearance: "warning",
    },
  },
  render: (args) => <TabController {...args} />,
};

export default meta;
export { Default };
