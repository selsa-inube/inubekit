import { BrowserRouter } from "react-router-dom";
import { FullscreenNav, IFullscreenNav } from "..";
import { props } from "../props";
import { defaultFullscreenNavProps } from "./fullscreenNavProps";
import { ElementType } from "react";

const story = {
  title: "navigation/FullscreenNav",
  components: [FullscreenNav],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
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
  footerLogo:
    "https://res.cloudinary.com/dqssv7qtd/image/upload/v1742589607/selsa-logo_wjo1pt.png",
};

export default story;
export { Default, WithLogo };
