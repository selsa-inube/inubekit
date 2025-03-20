import { useContext, useState } from "react";
import {
  MdCheckCircleOutline,
  MdClear,
  MdErrorOutline,
  MdOutlineChat,
  MdOutlineWarningAmber,
} from "react-icons/md";

import { CountdownBar } from "../../CountdownBar";
import { Icon } from "../../Icon";
import { Stack } from "../../Stack";
import { Text } from "../../Text";

import { useMediaQueries } from "../../Hooks/useMediaQueries";
import { FlagContext, FlagContextType } from "../FlagsProvider";
import { IFlagAppearance } from "./props";
import { StyledFlag } from "./styles";

interface IFlag {
  id: string;
  title: string;
  description: string;
  appearance: IFlagAppearance;
  duration: number;
}

const iconMap: Record<IFlagAppearance, JSX.Element> = {
  primary: <MdOutlineChat />,
  gray: <MdOutlineChat />,
  dark: <MdOutlineChat />,
  success: <MdCheckCircleOutline />,
  warning: <MdOutlineWarningAmber />,
  danger: <MdErrorOutline />,
  help: <MdErrorOutline />,
};

const getIconForAppearance = (appearance: IFlagAppearance): JSX.Element => {
  return iconMap[appearance];
};

const Flag = (props: IFlag) => {
  const { id, title, description, appearance, duration } = props;
  const [isPaused, setIsPaused] = useState(false);
  const { removeFlag } = useContext(FlagContext) as FlagContextType;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    } else {
      return text;
    }
  };

  const selectedIcon = getIconForAppearance(appearance);

  const handleRemoveFlag = () => {
    removeFlag(id);
  };

  const matches = useMediaQueries(["(max-width: 528px)"]);
  const isSmallScreen = matches["(max-width: 528px)"];

  return (
    <StyledFlag
      $appearance={appearance}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Stack justifyContent="space-between" padding="12px 16px">
        <Stack
          alignItems="center"
          gap="16px"
          width="100%"
          height={isSmallScreen ? "auto" : "fit-content"}
        >
          <Icon
            appearance={appearance}
            icon={selectedIcon}
            size={isSmallScreen ? "20px" : "24px"}
          />
          <Stack
            direction="column"
            width="100%"
            gap={isSmallScreen ? "2px" : "6px"}
          >
            <Stack justifyContent="space-between" width="100%" gap="4px">
              <Text
                type="label"
                size={isSmallScreen ? "medium" : "large"}
                textAlign="start"
                weight="bold"
              >
                {truncateText(title, 40)}
              </Text>
              <Icon
                size="16px"
                onClick={handleRemoveFlag}
                appearance="dark"
                icon={<MdClear />}
                cursorHover={true}
              />
            </Stack>
            <Text
              size={isSmallScreen ? "small" : "medium"}
              appearance="gray"
              textAlign="start"
            >
              {truncateText(description, 80)}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      {duration && (
        <CountdownBar
          paused={isPaused}
          appearance={appearance}
          duration={duration}
          onCountdown={handleRemoveFlag}
        />
      )}
    </StyledFlag>
  );
};

export { Flag };
export type { IFlag };
