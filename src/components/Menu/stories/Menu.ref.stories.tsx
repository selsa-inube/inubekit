import { StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Menu } from "..";
import { MenuUser } from "../MenuUser";
import { MenuSection } from "../MenuSection";
import {
  MdLogout,
  MdOutlinePerson,
  MdOutlineMarkunreadMailbox,
  MdOutlineSettings,
  MdHelpOutline,
} from "react-icons/md";
import { MenuAction } from "../MenuAction";
import { MenuLink } from "../MenuLink";
import { Button } from "../../Button";
import { StyledRefContainer } from "./styles";

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

export const RefStory: StoryFn = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledRefContainer>
      <Button onClick={() => setMenuOpen(!isMenuOpen)} children="Open Menu" />
      {isMenuOpen && (
        <Menu ref={menuRef}>
          <MenuUser userName="Name" businessUnit="Business Unit" avatar />
          <MenuSection divider>
            <MenuLink
              title="Profile"
              path="/profile"
              iconBefore={<MdOutlinePerson />}
            />
            <MenuLink
              title="Messages"
              path="/messages"
              iconBefore={<MdOutlineMarkunreadMailbox />}
            />
          </MenuSection>
          <MenuSection divider>
            <MenuLink
              title="Settings"
              path="/settings"
              iconBefore={<MdOutlineSettings />}
            />
            <MenuLink
              title="Help"
              path="/help"
              iconBefore={<MdHelpOutline />}
            />
          </MenuSection>
          <MenuSection divider>
            <MenuAction
              title="Logout"
              iconBefore={<MdLogout />}
              action={() => console.log("logout")}
            />
          </MenuSection>
        </Menu>
      )}
    </StyledRefContainer>
  );
};

export default story;
