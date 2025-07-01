import styled from "styled-components";

export const LanguageSelectContainer = styled.div`
  width: 100%;
`;

export const LanguageOptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const OptionText = styled.span`
  width: 1rem;
`;

export const FlagIcon = styled.span`
  width: 16px;
  height: 16px;

  img {
    width: inherit;
    height: inherit;
  }
`;
