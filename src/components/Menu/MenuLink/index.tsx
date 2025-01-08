import { IMenuItem, MenuItem } from "../MenuItem";
import { StyledMenuLink } from "./styles";

interface IMenuLink extends IMenuItem {
  path: string;
}

function MenuLink(props: IMenuLink) {
  const { path, disabled } = props;

  return (
    <StyledMenuLink to={path} disabled={disabled}>
      <MenuItem {...props} />
    </StyledMenuLink>
  );
}

export { MenuLink };
export type { IMenuLink };
