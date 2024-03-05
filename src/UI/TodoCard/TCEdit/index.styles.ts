import styled from "styled-components";
import { resetButton } from "lib/styles";

const InputSC = styled.input`
  margin: 0 8px 0 0;

  flex: 1;

  font-size: 18px;
`;

const ButtonsContainerSC = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonSC = styled.button`
  ${resetButton}
`;

export const styles = { InputSC, ButtonsContainerSC, ButtonSC };
