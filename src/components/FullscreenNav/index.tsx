import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "styled-components";

import { tokens } from "./tokens";

import { MdMenu } from "react-icons/md";

import { FNavMenu } from "./FNavMenu";
import { Icon } from "../Icon";

import { INavLink } from "../Nav/NavLink";
import { INavAction } from "../Nav/Nav";
import { IIconAppearance } from "../Icon/props";

interface IFullscreenNavSection {
  subtitle: string;
  links: INavLink[];
  displaySubtitles?: boolean;
  collapse?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
}

interface IFullscreenNav {
  reactPortalId: string;
  title?: string;
  sections: IFullscreenNavSection[];
  actions?: INavAction[];
  footerLabel?: string;
  footerLogo?: string;
  displaySubtitles?: boolean;
  collapse?: boolean;
}

const FullscreenNav = (props: IFullscreenNav) => {
  const {
    reactPortalId,
    title,
    sections,
    actions,
    footerLabel,
    footerLogo,
    displaySubtitles = false,
    collapse = false,
  } = props;

  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const node = document.getElementById(reactPortalId);
  if (node === null) {
    console.error(
      "Missing HTML DOM element where <FullscreenNav /> can create a React Portal to render itself.",
    );
    return;
  }

  const burgerAppearance =
    (theme?.fullscreenNav?.burger?.appearance as IIconAppearance) ||
    tokens.burger.appearance;

  return (
    <>
      <Icon
        appearance={burgerAppearance}
        icon={<MdMenu />}
        onClick={() => setIsMenuOpen(true)}
        size="24px"
        cursorHover={true}
      />
      {isMenuOpen &&
        createPortal(
          <FNavMenu
            title={title}
            sections={sections}
            actions={actions}
            footerLabel={footerLabel}
            footerLogo={footerLogo}
            displaySubtitles={displaySubtitles}
            collapse={collapse}
            onClose={() => setIsMenuOpen(false)}
          />,
          node,
        )}
    </>
  );
};

export { FullscreenNav };
export type { IFullscreenNav, IFullscreenNavSection };
