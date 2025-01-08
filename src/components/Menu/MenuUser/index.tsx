import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { Avatar } from "../../Avatar";
import { Grid } from "../../Grid";

interface IMenuUser {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
  padding?: string;
  gap?: string;
}

function MenuUser(props: IMenuUser) {
  const {
    userName,
    businessUnit,
    avatar = true,
    padding = "12px 16px",
    gap = "12px",
  } = props;

  return (
    <Grid
      templateColumns={avatar ? "auto 1fr" : "1fr"}
      gap={gap}
      padding={padding}
      alignItems="center"
    >
      {avatar && <Avatar />}
      <Stack direction="column">
        <Text type="body" size="medium">
          {userName}
        </Text>
        <Text type="body" size="small" appearance="gray">
          {businessUnit}
        </Text>
      </Stack>
    </Grid>
  );
}

export { MenuUser };
export type { IMenuUser };
