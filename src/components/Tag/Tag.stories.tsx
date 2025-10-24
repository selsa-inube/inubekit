import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "./props";
import { Tag } from ".";
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
import { ITagAppearance } from "./props";

const meta = {
  title: "data/Tag",
  component: Tag,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    appearance: "primary",
    label: "Tag",
    removable: false,
    displayIcon: true,
  },
};

const appearanceToIcon: Record<ITagAppearance, React.ComponentType> = {
  primary: MdOutlineSportsBaseball,
  success: MdOutlineSportsBasketball,
  danger: MdOutlineSportsCricket,
  warning: MdOutlineSportsEsports,
  help: MdOutlineSportsFootball,
  dark: MdOutlineSportsGolf,
  gray: MdOutlineSportsHockey,
  light: MdOutlineSportsMma,
};

const DefinedIcon: Story = {
  args: {
    appearance: "primary",
    label: "Tag",
    removable: true,
  },
  render: (args) => {
    const IconComponent = appearanceToIcon[args.appearance];
    return <Tag {...args} icon={<IconComponent />} />;
  },
};

export default meta;
export { Default, DefinedIcon };
