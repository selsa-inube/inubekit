import { JSX } from "react/jsx-runtime";
import { IProgressBar, ProgressBar } from "..";
import { parameters, props } from "../props";
import { ProgressBarController } from "./ProgressBar.controller";
import { action } from "storybook/actions";

const story = {
  title: "feedback/ProgressBar",
  component: ProgressBar,
  argTypes: { ...props, onComplete: { action: "onAnimationEnd" } },
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IProgressBar) => (
  <ProgressBar {...args} />
);

Default.args = {
  height: "4px",
  appearance: "primary",
  progress: 45,
  onComplete: action("onAnimationEnd"),
};

const Runtime = (
  args: JSX.IntrinsicAttributes & IProgressBar & { run: boolean },
) => <ProgressBarController {...args} />;

Runtime.args = {
  height: "4px",
  appearance: "primary",
  run: true,
  onComplete: action("onAnimationEnd"),
};

Runtime.argTypes = {
  ...props,
  run: {
    control: { type: "boolean" },
    description: "Run the progress bar animation",
  },
  onComplete: { action: "onAnimationEnd" },
};

export { Default, Runtime };
export default story;
