import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { tokens } from "../tokens";

import { Grid } from "../../Grid";
import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { Stack } from "../../Stack";
import { NavLink } from "../../Nav/NavLink";
import { Divider } from "../../Divider";

import { MdClose } from "react-icons/md";

import { IFullscreenNav } from "..";
import { ITextAppearance } from "src/components/Text/props";
import { IIconAppearance } from "src/components/Icon/props";

import {
  StyledFullscreenNav,
  StyledFooterLogoImage,
  StyledFooter,
} from "./styles";
import { FullscreenNavSection } from "../FNavSection";

interface IFullscreenNavMenu {
  title?: IFullscreenNav["title"];
  sections: IFullscreenNav["sections"];
  actions?: IFullscreenNav["actions"];
  footerLabel?: IFullscreenNav["footerLabel"];
  footerLogo?: IFullscreenNav["footerLogo"];
  onClose: () => void;
}

const FNavMenu = (props: IFullscreenNavMenu) => {
  const { title, sections, actions, footerLabel, footerLogo, onClose } = props;
  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };

  const titleAppearance =
    (theme?.fullscreenNav?.title?.appearance as ITextAppearance) ||
    tokens.title.appearance;

  const crossAppearance =
    (theme?.fullscreenNav?.burger?.appearance as IIconAppearance) ||
    tokens.burger.appearance;

  return (
    <StyledFullscreenNav>
      <Grid templateColumns="1fr auto" padding="32px 16px">
        <Text
          type="title"
          size="small"
          appearance={titleAppearance}
          weight="bold"
        >
          {title}
        </Text>
        <Icon
          appearance={crossAppearance}
          icon={<MdClose />}
          onClick={onClose}
          size="24px"
          cursorHover={true}
        />
      </Grid>
      {sections.map((section) => (
        <FullscreenNavSection
          key={section.subtitle}
          subtitle={section.subtitle}
          links={section.links}
          onClose={onClose}
        />
      ))}
      <Divider marginTop="12px" marginBottom="12px" />
      {actions && actions.length > 0 && (
        <>
          {actions.map((action) => (
            <NavLink
              key={action.id}
              id={action.id}
              label={action.label}
              icon={action.icon}
              onClick={() => {
                action.action();
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
            <Text
              type="label"
              size="medium"
              appearance={
                (theme?.fullscreenNav?.copyright
                  ?.appearance as ITextAppearance) ||
                tokens.copyright.appearance
              }
            >
              {footerLabel}
            </Text>
          )}
        </Stack>
      </StyledFooter>
    </StyledFullscreenNav>
  );
};

export { FNavMenu };
