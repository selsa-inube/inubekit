import { StoryFn } from "@storybook/react";
import { IMessage, Message } from ".";
import { parameters, props } from "./props";

const story = {
  title: "feedback/Message",
  components: [Message],
  parameters,
  argTypes: props,
};

const Default: StoryFn<IMessage> = (args) => <Message {...args} />;

Default.args = {
  title: "Message",
  appearance: "success",
  size: "small",
  description: "This is a message description",
  primaryActionText: "Continue",
  secondaryActionText: "Cancel",
  primaryAction: () => alert("Primary action clicked"),
  secondaryAction: () => alert("Secondary action clicked"),
};

export { Default };
export default story;
