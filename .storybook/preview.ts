import type { Preview } from "@storybook/react";
import Inubekit from "./theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: Inubekit,
    },
  },
};

export default preview;
