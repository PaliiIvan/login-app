import styled from "styled-components";

export const TimeCircleContainer = styled.div<{ progress: number }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: conic-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) ${(props) => props.progress}%,
    white 0%,
    white 100%
  );
  mask: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0) 59%,
    #ffffff 61%
  );
`;
