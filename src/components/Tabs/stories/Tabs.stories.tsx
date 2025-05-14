import { Tabs, ITabs } from "..";
import { TabsController } from "./TabsController";
import { props, parameters } from "../props";
import { MdErrorOutline, MdOutlineReportProblem } from "react-icons/md";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  parameters,
  argTypes: props,
};

const Default = (args: ITabs) => <TabsController {...args} />;
Default.args = {
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
};

export { Default };
export default story;
