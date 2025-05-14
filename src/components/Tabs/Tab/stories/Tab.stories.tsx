import { Tab, ITab } from "../index";
import { TabController } from "./TabController";

import { props } from "../props";
import { MdOutlineReportProblem } from "react-icons/md";

const story = {
  title: "navigation/Tabs/Tab",
  components: [Tab],
  argTypes: props,
};

const Default = (args: ITab) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
  selected: { control: null },
  icon: {
    icon: <MdOutlineReportProblem />,
    appearance: "warning",
  },
};

export { Default };
export default story;
