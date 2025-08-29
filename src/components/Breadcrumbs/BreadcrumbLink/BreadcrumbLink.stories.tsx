import { BrowserRouter } from "react-router-dom";
import { action } from "storybook/actions";
import { props } from "./props";
import { BreadcrumbLink, IBreadcrumbLink } from ".";
import { ElementType } from "react";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbLink",
  components: [BreadcrumbLink],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbLink) => <BreadcrumbLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
  onClick: action("onClick"),
};

export { Default };
export default story;
