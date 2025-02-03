import { useState } from "react";
import { createPortal } from "react-dom";
import {
  MdMenu,
  MdClose,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";

import { Icon } from "../Icon";
import { IIconAppearance } from "../Icon/props";
import { Text } from "../Text";
import { ITextAppearance } from "../Text/props";
import { Grid } from "../Grid";
import { Stack } from "../Stack";
import { NavLink, INavLink } from "../Nav/NavLink";
import { INavAction } from "../Nav/Nav";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledSeparatorLine,
  StyledDetails,
  StyledSummary,
  StyledFooter,
  StyledFooterLogoImage,
} from "./styles";
import { tokens } from "./tokens";

interface IFNavSection {
  name: string;
  links: { [key: string]: INavLink };
}

interface IFNavMenuSection {
  navigation: IFNavigation;
  onClose: () => void;
}

interface IFNavigation {
  title: string;
  sections: { [key: string]: IFNavSection };
}

interface IFNav {
  portalId: string;
  navigation: IFNavigation;
  actions?: INavAction[];
  footerLabel?: string;
  footerLogo?: string;
  logoutPath?: string;
  logoutTitle?: string;
}

const MultiSections = ({ navigation, onClose }: IFNavMenuSection) => {
  const sections = Object.keys(navigation.sections);
  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };
  const selectedNavLinkAppearance =
    (theme?.fullscreenNav?.link?.appearance?.selected as IIconAppearance) ||
    tokens.link.appearance.selected;
  const regularNavLinkAppearance =
    (theme?.fullscreenNav?.link?.appearance?.regular as IIconAppearance) ||
    tokens.link.appearance.regular;

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (section === openSection) {
      setOpenSection("");
      return;
    }
    setOpenSection(section);
  };

  return (
    <Stack direction="column">
      {sections.map((section) => (
        <Stack key={section}>
          <StyledDetails
            id={section}
            open={section === openSection}
            onClick={(e: PointerEvent) => {
              e.preventDefault();
              toggleSection(section);
            }}
          >
            <StyledSummary>
              <Text
                margin="0px 16px"
                type="title"
                size="small"
                appearance={
                  section === openSection
                    ? selectedNavLinkAppearance
                    : regularNavLinkAppearance
                }
                weight="bold"
              >
                {section.toUpperCase()}
              </Text>
              <span>
                <Icon
                  appearance={regularNavLinkAppearance}
                  icon={
                    section === openSection ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )
                  }
                  size="24px"
                />
              </span>
            </StyledSummary>
            <Stack direction="column">
              {Object.values(navigation.sections[section].links).map(
                (linkValue) => (
                  <NavLink
                    key={linkValue.id}
                    id={linkValue.id}
                    label={linkValue.label}
                    icon={linkValue.icon}
                    path={linkValue.path}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                  />
                ),
              )}
            </Stack>
          </StyledDetails>
        </Stack>
      ))}
    </Stack>
  );
};

const TwoSections = ({ navigation, onClose }: IFNavMenuSection) => {
  const navigationSectionValues = Object.values(navigation.sections);
  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };

  const titleAppearance =
    (theme?.fullscreenNav?.title?.appearance as ITextAppearance) ||
    tokens.title.appearance;

  return (
    <Stack direction="column">
      {navigationSectionValues.map((sectionValue) => (
        <Stack key={sectionValue.name} direction="column" margin="0 0 24px 0">
          <Text
            as="h2"
            type="title"
            size="small"
            appearance={titleAppearance}
            padding="16px"
            weight="bold"
          >
            {sectionValue.name}
          </Text>
          <Stack direction="column">
            {Object.values(sectionValue.links).map((linkValue) => (
              <NavLink
                key={linkValue.id}
                id={linkValue.id}
                label={linkValue.label}
                icon={linkValue.icon}
                path={linkValue.path}
                onClick={() => onClose()}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation, onClose }: IFNavMenuSection) => {
  const sectionValue = Object.values(navigation.sections)[0];

  return (
    <Stack direction="column">
      {Object.values(sectionValue.links).map((linkValue) => (
        <NavLink
          key={linkValue.id}
          id={linkValue.id}
          label={linkValue.label}
          icon={linkValue.icon}
          path={linkValue.path}
          onClick={() => onClose()}
        />
      ))}
    </Stack>
  );
};

const sectionsComponents: {
  [key: number]: ({ navigation }: IFNavMenuSection) => JSX.Element;
} = {
  1: OneSection,
  2: TwoSections,
};

const FullscreenMenu = (
  props: Omit<IFNav, "portalId"> & { onClose: () => void },
) => {
  const {
    navigation,
    actions,
    onClose,
    footerLabel = "©2025 - Inube",
    footerLogo,
  } = props;

  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };

  const titleFullscreenNavAppearance =
    (theme?.fullscreenNav?.title?.appearance as ITextAppearance) ||
    tokens.title.appearance;

  const fullscreenNavCloseIconAppearance =
    (theme?.fullscreenNav?.burger?.appearance as IIconAppearance) ||
    tokens.burger.appearance;

  const sections = Object.keys(navigation.sections);
  const SectionComponent = sectionsComponents[sections.length] || MultiSections;

  return (
    <StyledFullscreenNav>
      <Grid templateColumns="1fr auto" padding="32px 24px">
        <Text
          type="title"
          size="small"
          appearance={titleFullscreenNavAppearance}
          weight="bold"
        >
          {navigation.title}
        </Text>
        <Icon
          appearance={fullscreenNavCloseIconAppearance}
          icon={<MdClose />}
          onClick={() => onClose()}
          size="24px"
          cursorHover={true}
        />
      </Grid>
      <SectionComponent navigation={navigation} onClose={onClose} />
      <StyledSeparatorLine />
      {actions && actions.length > 0 && (
        <>
          {actions.map(({ id, label, icon, action }) => (
            <NavLink
              key={id}
              id={id}
              label={label}
              icon={icon}
              onClick={() => {
                action();
                onClose();
              }}
            />
          ))}
        </>
      )}
      <StyledFooter>
        <Stack justifyContent="center" alignItems="center">
          {footerLogo ? (
            <StyledFooterLogoImage src={footerLogo} alt="" />
          ) : (
            <Text type="label" size="medium" weight="bold">
              {footerLabel}
            </Text>
          )}
        </Stack>
      </StyledFooter>
    </StyledFullscreenNav>
  );
};

const FullscreenNav = (props: IFNav) => {
  const { portalId, navigation, actions, footerLabel, footerLogo } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };
  const fullscreenNavBurgerIconAppearance =
    (theme?.fullscreenNav?.burger?.appearance as IIconAppearance) ||
    tokens.burger.appearance;
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return (
    <>
      <StyledContDropMenu>
        <Icon
          appearance={fullscreenNavBurgerIconAppearance}
          icon={<MdMenu />}
          onClick={() => setIsMenuOpen(true)}
          size="24px"
          cursorHover={true}
        />
      </StyledContDropMenu>
      {isMenuOpen &&
        createPortal(
          <FullscreenMenu
            navigation={navigation}
            actions={actions}
            footerLabel={footerLabel}
            footerLogo={footerLogo}
            onClose={() => setIsMenuOpen(false)}
          />,
          node,
        )}
    </>
  );
};

export { FullscreenNav };
export type { IFNav, IFNavigation, IFNavSection, IFNavMenuSection };
