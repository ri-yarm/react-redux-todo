import styled from "styled-components";
import { resetButton } from "lib/styles";

const ContainerSC = styled.div`
  display: flex;
`;

const InputSC = styled.input`
  flex: 1;

  font-size: 18px;

  padding: 6px;
`;

const ButtonSC = styled.button`
  margin-left: 8px;

  ${resetButton}
`;

export const styles = { ContainerSC, InputSC, ButtonSC };
