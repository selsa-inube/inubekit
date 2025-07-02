import { Text } from "../../Text";
import { tokens as TextTokens } from "../../Text/tokens";
import { StyledTab } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "../tokens";
import { Icon, IIcon } from "../../Icon";

interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
  icon?: IIcon;
}

const Tab = (props: ITab) => {
  const { disabled = false, selected = false, id, label, icon } = props;
  const theme = useContext(ThemeContext) as { tabs: typeof tokens };
  const selectedAppearance =
    theme?.tabs?.content?.appearance?.selected ||
    tokens.content.appearance.selected;

  return (
    <StyledTab
      $disabled={disabled}
      $selected={selected}
      id={id}
      $appearance={selectedAppearance}
    >
      {icon && <Icon {...icon} size="16px" appearance={icon.appearance} />}
      <Text
        type="label"
        size="medium"
        appearance={
          selected ? (selectedAppearance as keyof typeof TextTokens) : "gray"
        }
        disabled={disabled}
        textAlign="start"
        weight="bold"
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
export type { ITab };
