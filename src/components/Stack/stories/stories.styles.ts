import styled from "styled-components";
import { inube } from "../../Foundations";

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${inube.palette.neutral.N50};
  border-radius: 4px;
  padding: 3px;
  height: 50px;
  width: 70px;
  color: ${inube.palette.neutral.N500};

  ul& {
    background-color: ${inube.palette.blue.B50};
    color: ${inube.palette.blue.B500};
  }

  ol& {
    background-color: ${inube.palette.green.G50};
    color: ${inube.palette.green.G500};
  }
`;

export { StyledSquare };
