import { Icon } from "../Icon";
import { MdPersonOutline } from "react-icons/md";

interface IAvatar {
  onClick?: () => void;
}

const Avatar = (props: IAvatar) => {
  const { onClick } = props;
  return (
    <Icon
      appearance="primary"
      cursorHover={true}
      variant="filled"
      shape="circle"
      icon={<MdPersonOutline />}
      size="32px"
      spacing="compact"
      onClick={onClick}
    />
  );
};

export { Avatar };
export type { IAvatar };
