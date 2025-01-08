import React, { forwardRef } from "react";
import { StyledMenu } from "./styles";

interface IMenu {
  children: React.ReactNode;
  width?: string;
}

const Menu = forwardRef<HTMLDivElement, IMenu>((props, ref) => {
  const { children, width = "fit-content" } = props;

  return (
    <StyledMenu ref={ref} $width={width}>
      {children}
    </StyledMenu>
  );
});

export { Menu };
export type { IMenu };
