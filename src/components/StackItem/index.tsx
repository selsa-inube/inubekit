import { IStackItemAlignSelfProperties } from "./props";
import { StyledStackItem } from "./styles";

interface IStackItem {
  children?: React.ReactNode;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  alignSelf?: IStackItemAlignSelfProperties;
}

const StackItem = (props: IStackItem) => {
  const {
    children,
    order = 0,
    flexGrow = 0,
    flexShrink = 1,
    flexBasis = "auto",
    alignSelf = "auto",
  } = props;
  return (
    <StyledStackItem
      $order={order}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexBasis={flexBasis}
      $alignSelf={alignSelf}
    >
      {children}
    </StyledStackItem>
  );
};

export { StackItem };
export type { IStackItem };
