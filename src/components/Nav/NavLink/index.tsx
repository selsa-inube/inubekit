import { MdKeyboardArrowRight } from "react-icons/md";
import { Icon } from "../../Icon";
import { IIconAppearance } from "../../Icon/props";
import { Text } from "../../Text";
import { Grid } from "../../Grid";

import { StyledAction, StyledLink, StyledNavList } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "../Nav/tokens";

type INavLinkSpacing = "wide" | "compact";

interface INavLink {
  id: string;
  label: string;
  spacing?: INavLinkSpacing;
  path?: string;
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const renderLinkContent = ({
  icon,
  label,
  spacing,
  selected,
  disabled,
  selectedNavLinkAppearance,
  regularNavLinkAppearance,
}: {
  icon?: React.ReactNode;
  label: string;
  spacing?: INavLinkSpacing;
  selected: boolean;
  disabled: boolean;
  selectedNavLinkAppearance: IIconAppearance;
  regularNavLinkAppearance: IIconAppearance;
}) => (
  <Grid
    templateColumns={icon ? "auto 1fr auto" : "1fr auto"}
    gap="16px"
    padding={spacing === "compact" ? "4px 8px 4px 16px" : "8px 16px"}
    alignItems="center"
  >
    {icon && (
      <Icon
        icon={icon}
        appearance={
          selected ? selectedNavLinkAppearance : regularNavLinkAppearance
        }
        disabled={disabled}
        size={spacing === "compact" ? "20px" : "24px"}
      />
    )}
    <Text
      appearance={
        selected ? selectedNavLinkAppearance : regularNavLinkAppearance
      }
      type="body"
      disabled={disabled}
      textAlign="start"
      size="medium"
    >
      {label}
    </Text>
    {!disabled && selected && (
      <Icon
        icon={<MdKeyboardArrowRight />}
        appearance={
          selected ? selectedNavLinkAppearance : regularNavLinkAppearance
        }
        size={spacing === "compact" ? "20px" : "24px"}
      />
    )}
  </Grid>
);

const NavLink = (props: INavLink) => {
  const {
    id,
    label,
    spacing = "wide",
    path,
    disabled = false,
    selected = false,
    icon,
    onClick,
  } = props;

  const theme = useContext(ThemeContext) as { nav: typeof tokens };

  const selectedNavLinkAppearance =
    (theme?.nav?.link?.appearance?.selected as IIconAppearance) ||
    tokens.link.appearance.selected;
  const regularNavLinkAppearance =
    (theme?.nav?.link?.appearance?.regular as IIconAppearance) ||
    tokens.link.appearance.regular;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick && !path) {
      e.preventDefault();
    }
    try {
      onClick && onClick(e);
    } catch (error) {
      console.error(`Error executing onClick for ${id}:`, error);
    }
  };

  return (
    <StyledNavList
      id={id}
      $disabled={disabled}
      $appearance={selected ? selectedNavLinkAppearance : undefined}
      $spacing={spacing}
      $selected={selected}
      onClick={handleClick}
    >
      {path ? (
        <StyledLink to={path} $disabled={+disabled}>
          {renderLinkContent({
            icon,
            label,
            spacing,
            selected,
            disabled,
            selectedNavLinkAppearance,
            regularNavLinkAppearance,
          })}
        </StyledLink>
      ) : (
        <StyledAction $disabled={+disabled}>
          {renderLinkContent({
            icon,
            label,
            spacing,
            selected,
            disabled,
            selectedNavLinkAppearance,
            regularNavLinkAppearance,
          })}
        </StyledAction>
      )}
    </StyledNavList>
  );
};

export { NavLink };
export type { INavLink, INavLinkSpacing };
