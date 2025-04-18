import React from "react";
import { StyledTh } from "./styles";
import { IThAlignContent } from "./props";
import { Text } from "../../Text";

interface ITh extends React.ThHTMLAttributes<HTMLTableCellElement> {
  action?: boolean;
  align?: IThAlignContent;
  children: React.ReactNode;
}

const Th = (props: ITh) => {
  const { action = false, align = "center", children, ...restProps } = props;

  return (
    <StyledTh $align={align} $action={action} {...restProps}>
      <Text appearance="dark" type="label" size="medium" weight="bold">
        {children}
      </Text>
    </StyledTh>
  );
};

export { Th };
export type { ITh };
