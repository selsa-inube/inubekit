import { BrowserRouter } from "react-router-dom";
import { Link, ILink } from ".";
import { parameters, props } from "./props";
import { ElementType } from "react";

const story = {
  argTypes: props,
  component: Link,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters,
  title: "navigation/Link",
};

const Default = (args: ILink) => {
  return <Link {...args}>{args.children}</Link>;
};

Default.args = {
  children: "Link",
  path: "/",
  rel: "noopener noreferrer",
  size: "large",
  target: "_self",
  type: "body",
};

export { Default };
export default story;
