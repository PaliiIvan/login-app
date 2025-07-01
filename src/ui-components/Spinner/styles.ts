import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
  background: conic-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 20%,
    white 20%,
    white 100%
  );
  mask: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0) 59%,
    #ffffff 61%
  );
  animation: ${spin} 1s linear infinite;
`;
