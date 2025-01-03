import { StyledSquare } from "./stories.styles";
import React from "react";

interface ISquaresProps {
  item: React.ReactNode;
}

const Squares = (props: ISquaresProps) => {
  const { item } = props;

  return <StyledSquare>{item}</StyledSquare>;
};

export { Squares };
