import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { Stack } from "../../Stack";
import { MenuItemSpacingType } from "./props";
import { StyledMenuItem } from "./styles";
import { Grid } from "../../Grid";

interface IMenuItem {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  disabled?: boolean;
}

function MenuItem(props: IMenuItem) {
  const {
    title,
    description,
    spacing = "wide",
    iconBefore,
    iconAfter,
    disabled = false,
  } = props;

  function getTemplateColumns() {
    const columns = [];
    columns[1] = "1fr";
    if (iconBefore) {
      columns[0] = "auto";
    }
    if (iconAfter) {
      columns[2] = "auto";
    }

    return columns.join(" ");
  }

  return (
    <StyledMenuItem $spacing={spacing} $disabled={disabled}>
      <Grid
        templateColumns={getTemplateColumns()}
        gap="12px"
        alignContent="center"
        alignItems="center"
        padding={spacing === "wide" ? "8px 16px" : "4px 16px"}
        height={spacing === "wide" ? "40px" : "36px"}
      >
        {iconBefore && (
          <Icon
            icon={iconBefore}
            spacing="narrow"
            size="24px"
            appearance="dark"
            disabled={disabled}
          />
        )}
        <Stack direction="column" gap="4px">
          <Text type="label" size="large" disabled={disabled} weight="bold">
            {title}
          </Text>
          <Text type="body" size="small" appearance="gray" disabled={disabled}>
            {description}
          </Text>
        </Stack>
        {iconAfter && (
          <Icon
            icon={iconAfter}
            spacing="narrow"
            size="24px"
            appearance="dark"
            disabled={disabled}
          />
        )}
      </Grid>
    </StyledMenuItem>
  );
}

export { MenuItem };
export type { IMenuItem };
