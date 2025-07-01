import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--main);
`;

export const LoginFormCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 3rem;
  height: 50rem;
  width: 80rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

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

export const LoginFormContainer = styled.div`
  background-color: #fff;
  height: 100%;
  flex: 2;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const AdvertisementCartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: var(--link);
  flex: 3;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
`;

export const AppName = styled.div`
  width: 6rem;
  height: 2rem;
`;
