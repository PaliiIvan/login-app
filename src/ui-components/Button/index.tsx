import { Spinner } from "../Spinner";
import { UIButton } from "./styles";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  type?: "submit" | "button";
  restProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  type,
  isLoading,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <UIButton onClick={onClick} type={type} disabled={disabled} {...restProps}>
      {isLoading ? <Spinner /> : children}
    </UIButton>
  );
};
