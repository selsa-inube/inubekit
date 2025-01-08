import { IMenuItem, MenuItem } from "../MenuItem";

interface IMenuAction extends IMenuItem {
  action: () => void;
}

function MenuAction(props: IMenuAction) {
  const { action, disabled } = props;

  function handleClick() {
    if (action && !disabled) {
      action();
    }
  }

  return (
    <div onClick={handleClick}>
      <MenuItem {...props} />
    </div>
  );
}

export { MenuAction };
export type { IMenuAction };
