import styled from "styled-components";

const ContainerSC = styled.div`
  margin: 60px auto 40px;

  max-width: 600px;
`;

const ListSC = styled.ul`
  margin-top: 20px;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const styles = { ContainerSC, ListSC };
