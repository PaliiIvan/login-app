import { FormInputs } from "./FormInputs";
import { FormTitle } from "./FormTitle";
import { RequestHelp } from "./RequestHelp";
import { LoginForm } from "./styles";

export const Form = () => {
  return (
    <LoginForm>
      <FormTitle />
      <FormInputs />
      <RequestHelp />
    </LoginForm>
  );
};
