import styled from "styled-components";

const ContainerSC = styled.li<{ isCompleted: boolean }>`
  padding: 10px;

  display: flex;
  align-items: center;
  //justify-content: space-between;

  border: 1px solid black;
  border-radius: 12px;

  background: ${({ isCompleted }) => (isCompleted ? "#73ff00" : "inherit")};
`;

const InputCheckBoxSC = styled.input`
  margin-right: 20px;
`;

export const styles = { ContainerSC, InputCheckBoxSC };
