import { StyledTag } from "./styles";
import { ITagAppearance, ITagWeight } from "./props";
import { Text } from "../Text";
import { ITextAppearance } from "../Text/props";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Icon } from "../Icon";
import {
  MdCheckCircleOutline,
  MdClear,
  MdErrorOutline,
  MdInfoOutline,
  MdOutlineChat,
  MdOutlineReportProblem,
} from "react-icons/md";
import { Stack } from "../Stack";
import { tokens } from "./tokens";

interface ITag {
  appearance: ITagAppearance;
  id?: string;
  weight?: ITagWeight;
  label: string;
  removable?: boolean;
  withIcon?: boolean;
  onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const Tag = (props: ITag) => {
  const {
    appearance,
    weight = "normal",
    label,
    removable = false,
    withIcon = false,
    onClose,
  } = props;

  const theme = useContext(ThemeContext) as { tag: typeof tokens };
  const textAppearance = (appearance: ITextAppearance, weight: ITagWeight) => {
    return (theme?.tag?.[appearance][weight]?.content?.appearance ||
      tokens[appearance][weight].content.appearance) as ITextAppearance;
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
    switch (appearance) {
      case "primary":
        return <MdOutlineChat />;
      case "success":
        return <MdCheckCircleOutline />;
      case "warning":
        return <MdOutlineReportProblem />;
      case "danger":
        return <MdErrorOutline />;
      case "help":
        return <MdInfoOutline />;
      case "gray":
        return <MdOutlineChat />;
      case "dark":
        return <MdOutlineChat />;
      case "light":
        return <MdOutlineChat />;
      default:
        return <MdOutlineChat />;
    }
  };

  return (
    <StyledTag $appearance={appearance} $weight={weight} $removable={removable}>
      <Stack alignItems="center" gap="4px">
        <Stack alignItems="center" gap="2px">
          {withIcon && (
            <Icon
              onClick={interceptonClose}
              appearance={textAppearance(appearance, weight)}
              icon={getIcon(appearance)}
              size="12px"
            />
          )}
          <Text
            type="label"
            appearance={textAppearance(appearance, weight)}
            size="small"
            textAlign="start"
            weight="bold"
          >
            {label}
          </Text>
        </Stack>
        {removable && (
          <Icon
            onClick={interceptonClose}
            appearance={textAppearance(appearance, weight)}
            icon={<MdClear />}
            size="12px"
          />
        )}
      </Stack>
    </StyledTag>
  );
};

export { Tag };
export type { ITag };
