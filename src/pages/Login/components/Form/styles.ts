import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;

  form {
    width: 100%;
  }
`;

export const LoginFormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const LoginFormTitleText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

export const LoginFormTitleDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: center;
`;

export const LoginFormInputs = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const LoginFormInputsForgotPassword = styled.div`
  a {
    color: var(--link);
    font-size: 12px;
    text-decoration: none;
  }
`;

export const RequestHelp = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RequestHelpTitle = styled.div`
  font-size: 12px;
`;
