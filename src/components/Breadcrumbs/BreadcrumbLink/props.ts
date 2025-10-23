import { sizes } from "../props";

type IBreadcrumbLinkSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    },
  },
};

const props = {
  id: {
    description: "shall be the id for the text",
  },
  onClick: {
    control: { disable: true },
    description: "shall be determine the behavior of the click event",
  },
  label: {
    control: { type: "text" as const },
    description: "shall constitute the content to be displayed",
  },
  size: {
    options: ["large", "medium", "small"],
    control: { type: "select" as const },
    description: "indicates the font size used in the component",
  },
  path: {
    control: { type: "text" as const },
    description: "is the path where the BreadcrumbLink is going to navigate",
  },
  active: {
    control: { type: "boolean" as const },
    description: "indicates if the breadcrumb link is active",
  },
};

export { parameters, props };
export type { IBreadcrumbLinkSize };
