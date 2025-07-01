import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const HiddenSelect = styled.select`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const Arrow = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #666;
  transition: transform 0.3s ease;
  margin-left: 8px;
`;

export const CustomSelect = styled.div<{ open: boolean }>`
  position: relative;
  user-select: none;

  & ${Arrow} {
    transform: ${({ open }) =>
      open
        ? "rotate(180deg) translate(0px, -3px)"
        : "rotate(0deg) translate(0px, 0px)"};
    transition: transform 0.3s ease;
  }
`;

export const SelectTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SelectedContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OptionsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

export const Option = styled.div<{ selected?: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #e3f2fd;
      color: #1976d2;
    `}

  &:hover {
    background-color: #f8f9fa;
  }

  &:focus {
    outline: none;
    background-color: #f8f9fa;
  }
`;

export const OptionContent = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OptionText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
