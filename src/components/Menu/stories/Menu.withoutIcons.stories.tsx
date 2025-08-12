import { StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import { MenuAction } from "../MenuAction";

const story = {
  title: "navigation/Menu",
  components: [Menu],
  tags: ["autodocs"],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const WithoutIcons: StoryFn = () => (
  <Menu>
    <MenuUser userName="Name" businessUnit="Business Unit" avatar />
    <MenuSection divider={true}>
      <MenuAction
        title="Show the nearest calendar"
        action={() => console.log("action")}
      />
      <MenuAction
        title="Add a secondary incident"
        action={() => console.log("action")}
      />
      <MenuAction
        title="Link a new issue "
        action={() => console.log("action")}
      />
    </MenuSection>

    <MenuSection divider={true}>
      <MenuAction title="Logout" action={() => console.log("action")} />
    </MenuSection>
  </Menu>
);

export default story;
