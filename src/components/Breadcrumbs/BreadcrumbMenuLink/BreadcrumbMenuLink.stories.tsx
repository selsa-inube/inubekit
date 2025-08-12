import { BrowserRouter } from "react-router-dom";

import { IBreadcrumbsRoute } from "../props";
import { props } from "../props";
import { BreadcrumbMenuLink } from ".";
import { ElementType } from "react";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbMenuLink",
  components: [BreadcrumbMenuLink],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbsRoute) => <BreadcrumbMenuLink {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
  size: "large",
};

export { Default };
export default story;
