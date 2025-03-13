import { useContext } from "react";
import {
  MdCheckCircleOutline,
  MdErrorOutline,
  MdOutlineChat,
  MdOutlineReportProblem,
} from "react-icons/md";
import { ThemeContext } from "styled-components";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { MessageAppearanceType, MessageSizeType } from "./props";
import { StyledMessageContent } from "./styles";
import { tokens } from "./tokens";

interface IMessage {
  title: string;
  appearance?: MessageAppearanceType;
  size?: MessageSizeType;
  description?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
}

const Message = (props: IMessage) => {
  const {
    title,
    appearance = "success",
    size,
    description,
    primaryActionText,
    secondaryActionText,
    primaryAction,
    secondaryAction,
  } = props;

  const theme = useContext(ThemeContext) as { message: typeof tokens };

  const getIcon = (appearance: MessageAppearanceType) => {
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
        return <MdErrorOutline />;
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
    <StyledMessageContent $appearance={appearance} $size={size}>
      <Stack
        direction="row"
        alignItems="center"
        gap={size === "large" ? "8px" : "12px"}
      >
        <Icon
          appearance={
            theme
              ? (theme.message[appearance].icon
                  .appearance as MessageAppearanceType)
              : (tokens[appearance].icon.appearance as MessageAppearanceType)
          }
          size="20px"
          icon={getIcon(appearance)}
        />
        <Text type="label" size="large" weight="bold" appearance="dark">
          {title}
        </Text>
      </Stack>

      {description && (
        <Text type="body" size="medium" weight="normal" appearance="gray">
          {description}
        </Text>
      )}

      {(primaryActionText || secondaryActionText) && (
        <Stack direction="row" gap="8px" justifyContent="flex-end">
          {secondaryActionText && (
            <Button
              appearance={
                theme
                  ? (theme.message[appearance].action.appearance
                      .secondary as MessageAppearanceType)
                  : (tokens[appearance].action.appearance
                      .secondary as MessageAppearanceType)
              }
              variant="outlined"
              spacing="compact"
              onClick={secondaryAction}
            >
              {secondaryActionText}
            </Button>
          )}

          {primaryActionText && (
            <Button
              appearance={
                theme
                  ? (theme.message[appearance].action.appearance
                      .primary as MessageAppearanceType)
                  : (tokens[appearance].action.appearance
                      .primary as MessageAppearanceType)
              }
              variant="outlined"
              spacing="compact"
              onClick={primaryAction}
            >
              {primaryActionText}
            </Button>
          )}
        </Stack>
      )}
    </StyledMessageContent>
  );
};

export { Message };
export type { IMessage };
