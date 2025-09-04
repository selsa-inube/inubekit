import type { Preview } from "@storybook/react-vite";
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
      //controls: { exclude: ['icon', 'iconBefore', ''] }
    },
  },
  tags: ["autodocs"],
};

export default preview;
