import styled from "styled-components";
import { inube } from "../../Foundations";

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${inube.palette.neutral.N30};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 100%;
  color: ${inube.palette.neutral.N100};
`;

export { StyledSquare };
