import { Icon } from "../Icon";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { MessageAppearanceType, MessageSizeType } from "./props";
import { StyledMessageContent } from "./styles";

interface IMessage {
  title: string;
  icon: React.ReactNode;
  appearance?: MessageAppearanceType;
  size?: MessageSizeType;
  children?: React.ReactNode;
}

const Message = (props: IMessage) => {
  const { title, icon, appearance = "success", children } = props;

  return (
    <StyledMessageContent $appearance={appearance}>
      <Stack direction="row" alignItems="center" gap="12px">
        <Icon appearance={appearance} icon={icon} />
        <Text type="label" size="medium" weight="bold">
          {title}
        </Text>
      </Stack>
      {children}
    </StyledMessageContent>
  );
};

export { Message };
export type { IMessage };
