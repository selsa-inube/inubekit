import { JSX } from "react/jsx-runtime";
import { IProgressBar } from "..";
import { parameters, props } from "../props";
import { ProgressBarController } from "./ProgressBar.controller";
import { action } from "storybook/actions";

const story = {
  title: "feedback/ProgressBar",
  component: ProgressBarController,
  argTypes: { ...props, onComplete: { action: "onAnimationEnd" } },
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IProgressBar) => (
  <ProgressBarController {...args} />
);
Default.args = {
  height: "4px",
  appearance: "primary",
  onComplete: action("onAnimationEnd"),
};

export { Default };
export default story;
