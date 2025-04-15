import { useContext, useState } from "react";
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

import { StyledFullscreenNav, StyledFooterLogoImage } from "./styles";
import { FullscreenNavSection } from "../FNavSection";

interface IFullscreenNavMenu {
  title?: IFullscreenNav["title"];
  sections: IFullscreenNav["sections"];
  actions?: IFullscreenNav["actions"];
  footerLabel?: IFullscreenNav["footerLabel"];
  footerLogo?: IFullscreenNav["footerLogo"];
  displaySubtitles?: IFullscreenNav["displaySubtitles"];
  collapse?: IFullscreenNav["collapse"];
  onClose: () => void;
}

const FNavMenu = (props: IFullscreenNavMenu) => {
  const {
    title,
    sections,
    actions,
    footerLabel,
    footerLogo,
    displaySubtitles,
    collapse,
    onClose,
  } = props;

  const [openSection, setOpenSection] = useState<string | null>(
    sections.length > 0 ? sections[0].subtitle : null,
  );

  const toggleSection = (subtitle: string) => {
    setOpenSection((current) => {
      if (current === subtitle) {
        return null;
      }
      return subtitle;
    });
  };

  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };

  const titleAppearance =
    (theme?.fullscreenNav?.title?.appearance as ITextAppearance) ||
    tokens.title.appearance;

  const copyrightAppearance =
    (theme?.fullscreenNav?.copyright?.appearance as ITextAppearance) ||
    tokens.copyright.appearance;

  return (
    <StyledFullscreenNav>
      <Stack direction="column">
        <Grid templateColumns="1fr auto" padding="32px 16px 16px">
          <Text
            type="title"
            size="small"
            appearance={titleAppearance}
            weight="bold"
          >
            {title}
          </Text>
          <Icon
            appearance={titleAppearance}
            icon={<MdClose />}
            onClick={onClose}
            size="20px"
            cursorHover={true}
          />
        </Grid>
        {sections.map((section) => (
          <FullscreenNavSection
            key={section.subtitle}
            subtitle={section.subtitle}
            links={section.links}
            displaySubtitles={displaySubtitles}
            collapse={collapse}
            isOpen={openSection === section.subtitle}
            onClose={onClose}
            onToggle={() => toggleSection(section.subtitle)}
          />
        ))}
        <Stack padding="0px 16px">
          <Divider marginTop="12px" marginBottom="12px" />
        </Stack>
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
      </Stack>
      <Stack width="100%" justifyContent="center">
        {footerLogo ? (
          <StyledFooterLogoImage src={footerLogo} alt="" />
        ) : (
          <Text
            type="label"
            size="medium"
            textAlign="center"
            padding="24px"
            appearance={copyrightAppearance}
          >
            {footerLabel}
          </Text>
        )}
      </Stack>
    </StyledFullscreenNav>
  );
};

export { FNavMenu };
