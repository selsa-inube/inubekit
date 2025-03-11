import { StoryFn } from "@storybook/react";
import { MdCheckCircleOutline } from "react-icons/md";
import { IMessage, Message } from ".";
import { parameters, props } from "./props";

const story = {
  title: "inputs/Message",
  components: [Message],
  parameters,
  argTypes: props,
};

const Default: StoryFn<IMessage> = (args) => <Message {...args} />;

Default.args = {
  title: "Message",
  icon: <MdCheckCircleOutline />,
  appearance: "success",
  size: "large",
};

export { Default };
export default story;
