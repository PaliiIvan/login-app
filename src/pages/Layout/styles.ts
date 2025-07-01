import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav-bar-height));
  width: 100vw;
`;
