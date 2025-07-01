import styled from "styled-components";

export const UIButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #ccc;
  }
`;
