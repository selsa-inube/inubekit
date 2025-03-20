import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "../tokens";
import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { NavLink } from "../../Nav/NavLink";
import { Icon } from "../../Icon";
import { IFullscreenNavSection } from "..";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { IIconAppearance } from "src/components/Icon/props";
import { StyledDetails } from "./styles";

function FullscreenNavSection(props: IFullscreenNavSection) {
  const {
    subtitle,
    links,
    displaySubtitles,
    collapse,
    isOpen,
    onToggle,
    onClose,
  } = props;

  const theme = useContext(ThemeContext) as { fullscreenNav: typeof tokens };
  const isCollapsible = displaySubtitles && collapse;

  const subtitleAppearance = {
    expanded:
      (theme?.fullscreenNav?.subtitle?.appearance
        ?.expanded as IIconAppearance) || tokens.subtitle.appearance.expanded,
    regular:
      (theme?.fullscreenNav?.subtitle?.appearance
        ?.regular as IIconAppearance) || tokens.subtitle.appearance.regular,
  };

  const handleSubtitleClick = (e: PointerEvent) => {
    e.preventDefault();
    if (isCollapsible) onToggle();
  };

  return (
    <>
      {displaySubtitles && (
        <StyledDetails
          onClick={handleSubtitleClick}
          $isCollapsible={isCollapsible}
          $isOpen={isOpen}
        >
          <Text
            as="h2"
            type="title"
            size="small"
            appearance={
              isCollapsible && isOpen
                ? subtitleAppearance.expanded
                : subtitleAppearance.regular
            }
            padding="26px 16px 10px"
            weight="bold"
          >
            {subtitle.toUpperCase()}
          </Text>

          {isCollapsible && (
            <Stack padding="0px 16px">
              <Icon
                appearance={
                  isCollapsible && isOpen
                    ? subtitleAppearance.expanded
                    : subtitleAppearance.regular
                }
                icon={
                  isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />
                }
                size="20px"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
              />
            </Stack>
          )}
        </StyledDetails>
      )}

      {(isOpen || !isCollapsible) && (
        <Stack direction="column">
          {links.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              icon={link.icon}
              path={link.path}
              onClick={onClose}
            />
          ))}
        </Stack>
      )}
    </>
  );
}

export { FullscreenNavSection };
