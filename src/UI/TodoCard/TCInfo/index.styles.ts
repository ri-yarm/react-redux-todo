import styled from "styled-components";

const TitleSC = styled.p`
  margin: 0 8px 0 0;

  flex: 1;

  font-size: 18px;
`;

const ButtonsContainerSC = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonSC = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const styles = { TitleSC, ButtonsContainerSC, ButtonSC };
