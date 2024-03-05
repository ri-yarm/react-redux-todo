import styled from "styled-components";
import { resetButton } from "lib/styles";

const ContainerSC = styled.div`
  margin-top: 8px;

  display: flex;
  justify-content: space-between;

  gap: 8px;
`;

const ButtonSC = styled.button`
  ${resetButton}
`;

export const styles = { ContainerSC, ButtonSC };
