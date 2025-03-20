import { BrowserRouter } from "react-router-dom";
import { FullscreenNav, IFullscreenNav } from "..";
import { props } from "../props";
import { defaultFullscreenNavProps } from "./fullscreenNavProps";

const story = {
  title: "navigation/FullscreenNav",
  components: [FullscreenNav],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IFullscreenNav) => <FullscreenNav {...args} />;

Default.args = {
  ...defaultFullscreenNavProps,
  footerLabel: "©2025 Inube",
};

const WithLogo = (args: IFullscreenNav) => <FullscreenNav {...args} />;

WithLogo.args = {
  ...defaultFullscreenNavProps,
  footerLogo: "https://i.imgur.com/YYrs6cF.png",
};

export default story;
export { Default, WithLogo };
