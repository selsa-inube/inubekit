import { MenuHeading } from "../MenuHeading";
import { Divider } from "../../Divider";
import { Stack } from "../../Stack";

interface IMenuSection {
  title?: string;
  children: React.ReactNode;
  divider?: boolean;
}

function MenuSection({ title, children, divider }: IMenuSection) {
  return (
    <Stack direction="column">
      {divider && (
        <Stack width="calc(100% - 32px)" margin="4px auto">
          <Divider />
        </Stack>
      )}
      {title && <MenuHeading title={title} />}
      <Stack direction="column">{children}</Stack>
    </Stack>
  );
}

export { MenuSection };
export type { IMenuSection };
