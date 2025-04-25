import { props, parameters } from "./props";
import { ITag, Tag } from ".";
import {
  MdOutlineSportsBaseball,
  MdOutlineSportsBasketball,
  MdOutlineSportsCricket,
  MdOutlineSportsEsports,
  MdOutlineSportsFootball,
  MdOutlineSportsGolf,
  MdOutlineSportsHockey,
  MdOutlineSportsMma,
} from "react-icons/md";

const story = {
  title: "data/Tag",
  component: Tag,
  parameters,
  argTypes: props,
};

const Default = (args: ITag) => <Tag {...args} />;

Default.args = {
  appearance: "primary",
  label: "Tag",
  removable: false,
  displayIcon: true,
};

const appearanceToIcon = {
  primary: MdOutlineSportsBaseball,
  success: MdOutlineSportsBasketball,
  danger: MdOutlineSportsCricket,
  warning: MdOutlineSportsEsports,
  help: MdOutlineSportsFootball,
  dark: MdOutlineSportsGolf,
  gray: MdOutlineSportsHockey,
  light: MdOutlineSportsMma,
};

const DefinedIcon = (args: ITag) => {
  const IconComponent = appearanceToIcon[args.appearance];
  return <Tag {...args} icon={<IconComponent />} />;
};

DefinedIcon.args = {
  appearance: "primary",
  label: "Tag",
  removable: true,
};

export default story;
export { Default, DefinedIcon };
