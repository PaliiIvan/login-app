import { useFormContext } from "react-hook-form";
import { InputErrorContainer } from "./styles";

type InputErrorProps = {
  name: string;
};
export const InputError = ({ name }: InputErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;
  return <InputErrorContainer>{error}</InputErrorContainer>;
};
