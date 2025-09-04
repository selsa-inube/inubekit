import { BrowserRouter } from "react-router-dom";

import { props } from "./props";
import { BreadcrumbEllipsis, IBreadcrumbEllipsis } from "./index";
import { ElementType } from "react";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbEllipsis",
  components: [BreadcrumbEllipsis],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbEllipsis) => <BreadcrumbEllipsis {...args} />;
Default.args = {
  routes: [
    {
      label: "Privileges",
      path: "/privileges",
      id: "privileges",
    },
    { label: "Users", path: "/users", id: "users" },
    {
      label: "User edition",
      path: "users/edition",
      id: "usersEdition",
    },
  ],
  size: "large",
};

export { Default };
export default story;
