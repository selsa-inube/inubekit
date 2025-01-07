import { ILinkSize, ILinkType } from "./props";
import { StyledLink } from "./styles";

interface ILink {
  children: React.ReactNode;
  path: string;
  rel?: string;
  size?: ILinkSize;
  target?: string;
  type?: ILinkType;
}

const Link = (props: ILink) => {
  const { children, path, rel, size = "large", target, type = "body" } = props;
  return (
    <StyledLink to={path} $size={size} $type={type} target={target} rel={rel}>
      {children}
    </StyledLink>
  );
};

export { Link };
export type { ILink };
