import { Icon } from "../Icon";
import { Text } from "../Text";
import { Spinner } from "../Spinner";
import { Stack } from "../Stack";
import {
  IButtonAppearance,
  IButtonType,
  IButtonSpacing,
  IButtonVariant,
} from "./props";

import {
  StyledButton,
  StyledLink,
  ButtonContent,
  SpinnerWrapper,
} from "./styles";
import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "./tokens";

interface IButton {
  children?: React.ReactNode;
  appearance?: IButtonAppearance;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: IButtonType;
  spacing?: IButtonSpacing;
  variant?: IButtonVariant;
  width?: string;
  fullwidth?: boolean;
  onClick?: (e?: Event) => void;
  path?: string;
  cursorHover?: boolean;
  parentHover?: boolean;
}

const determineParentHover = (
  variant: string,
  cursorHover: boolean,
  isHovered: boolean,
  parentHover: boolean,
) => {
  if (variant === "filled") {
    return false;
  }
  return cursorHover && !parentHover ? isHovered : parentHover;
};

const ButtonStructure = (props: IButton) => {
  const {
    children,
    appearance = "primary",
    loading = false,
    disabled = false,
    iconBefore,
    iconAfter,
    type = "button",
    spacing = "wide",
    variant = "filled",
    width,
    fullwidth = false,
    onClick,
    cursorHover = false,
    parentHover = false,
  } = props;

  const theme = useContext(ThemeContext) as { button: typeof tokens };
  const externalComponentAppearance = (appearance: IButtonAppearance) => {
    return (theme?.button?.[appearance]?.contrast?.appearance ||
      tokens[appearance].contrast.appearance) as IButtonAppearance;
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const interceptClick = (e: Event) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      console.error(error);
    }
  };

  const helperParentHover = determineParentHover(
    variant,
    cursorHover,
    isHovered,
    parentHover,
  );

  return (
    <StyledButton
      $appearance={appearance}
      $loading={loading!.toString()}
      $disabled={disabled}
      $iconBefore={iconBefore}
      $iconAfter={iconAfter}
      type={type}
      $spacing={spacing}
      $variant={variant}
      $width={width}
      $fullwidth={fullwidth}
      onClick={disabled ? null : interceptClick}
      $cursorHover={cursorHover}
      $parentHover={parentHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonContent>
        {!loading || (loading && disabled) ? (
          <Stack alignItems="center" justifyContent="center" gap="8px">
            {iconBefore && (
              <Icon
                icon={iconBefore}
                size="18px"
                appearance={
                  variant === "filled"
                    ? externalComponentAppearance(appearance)
                    : appearance
                }
                disabled={disabled}
                parentHover={helperParentHover}
              />
            )}
            <Text
              type="label"
              size="large"
              appearance={
                variant === "filled"
                  ? externalComponentAppearance(appearance)
                  : appearance
              }
              disabled={disabled}
              ellipsis={true}
              parentHover={helperParentHover}
              textAlign="start"
              weight="bold"
            >
              {children}
            </Text>
            {iconAfter && (
              <Icon
                icon={iconAfter}
                size="18px"
                appearance={
                  variant === "filled"
                    ? externalComponentAppearance(appearance)
                    : appearance
                }
                disabled={disabled}
                parentHover={helperParentHover}
              />
            )}
          </Stack>
        ) : (
          loading &&
          !disabled && (
            <SpinnerWrapper>
              <Spinner
                appearance={
                  variant === "filled"
                    ? externalComponentAppearance(appearance)
                    : appearance
                }
                transparent={variant === "filled"}
                size="small"
              />
            </SpinnerWrapper>
          )
        )}
      </ButtonContent>
    </StyledButton>
  );
};

const Button = (props: IButton) => {
  const { type = "button", path } = props;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink to={path}>
        <ButtonStructure {...props} />
      </StyledLink>
    );
  }

  return <ButtonStructure {...props} />;
};

export { Button };
export type { IButton };
