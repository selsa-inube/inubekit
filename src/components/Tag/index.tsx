import { JSX, useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  MdCheckCircleOutline,
  MdClear,
  MdErrorOutline,
  MdInfoOutline,
  MdOutlineChat,
  MdOutlineReportProblem,
} from "react-icons/md";

import { Icon } from "../Icon";
import { Text } from "../Text";
import { ITextAppearance } from "../Text/props";
import { Stack } from "../Stack";

import { StyledTag } from "./styles";
import { tokens } from "./tokens";
import { ITagAppearance } from "./props";

interface ITag {
  appearance: ITagAppearance;
  id?: string;
  label: string;
  removable?: boolean;
  displayIcon?: boolean;
  icon?: JSX.Element;
  onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const iconMap: Record<ITextAppearance, JSX.Element> = {
  primary: <MdOutlineChat />,
  success: <MdCheckCircleOutline />,
  warning: <MdOutlineReportProblem />,
  danger: <MdErrorOutline />,
  help: <MdInfoOutline />,
  gray: <MdOutlineChat />,
  dark: <MdOutlineChat />,
  light: <MdOutlineChat />,
};

const Tag = (props: ITag) => {
  const {
    appearance,
    label,
    removable = false,
    displayIcon = true,
    icon,
    onClose,
  } = props;

  const theme = useContext(ThemeContext) as { tag: typeof tokens };

  const textAppearance = (appearance: ITextAppearance) => {
    return (theme?.tag?.[appearance]?.content?.appearance ||
      tokens[appearance].content.appearance) as ITextAppearance;
  };

  const interceptonClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    try {
      onClose && onClose(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const getIcon = (appearance: ITextAppearance) => {
    return iconMap[appearance] || <MdOutlineChat />;
  };

  return (
    <StyledTag $appearance={appearance} $theme={theme}>
      <Stack alignItems="center" gap="6px">
        <Stack alignItems="center" gap="2px">
          {displayIcon && (
            <Icon
              size="18px"
              icon={icon || getIcon(appearance)}
              onClick={interceptonClose}
              appearance={textAppearance(appearance)}
            />
          )}
          <Text
            type="label"
            weight="bold"
            size="medium"
            textAlign="start"
            appearance={textAppearance(appearance)}
          >
            {label}
          </Text>
        </Stack>
        {removable && (
          <Icon
            size="16px"
            icon={<MdClear />}
            onClick={interceptonClose}
            appearance={textAppearance(appearance)}
          />
        )}
      </Stack>
    </StyledTag>
  );
};

export { Tag };
export type { ITag };
