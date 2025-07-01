import type { ChangeEvent } from "react";
import { InputError } from "../InputError";
import { InputContainer, StyledInputWrapper, StyledInput } from "./styles";

type InputProps = {
  type: "text" | "password" | "email";
  placeholder: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  restProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  ...restProps
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInputWrapper>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          {...restProps}
        />
      </StyledInputWrapper>
      <InputError name={name} />
    </InputContainer>
  );
};
