import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 3rem;
  height: 50rem;
  width: 80rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 1600px) {
    height: 50rem;
    width: 70rem;
  }
  @media (max-width: 1440px) {
    height: 40rem;
    width: 60rem;
  }
  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;
