import { Input } from "../../../../ui-components";
import { Link } from "react-router";
import { Button } from "../../../../ui-components";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogInRequest } from "../../hooks/useLogIn";
import { useTranslation } from "react-i18next";
import { LoginFormInputs, LoginFormInputsForgotPassword } from "./styles";

export const FormInputs = () => {
  const { handleLogIn, isLoading } = useLogInRequest();
  const { t } = useTranslation();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleLogIn)}>
        <LoginFormInputs>
          <div className="login_form_inputs_email">
            <Input
              type="email"
              placeholder={t("email")}
              {...form.register("email")}
            />
          </div>
          <div className="login_form_inputs_password">
            <Input
              type="password"
              placeholder={t("password")}
              {...form.register("password")}
            />
          </div>
          <LoginFormInputsForgotPassword>
            <Link to="/forgot-password">{t("forgot_password")}</Link>
          </LoginFormInputsForgotPassword>
          <div className="login_form_inputs_button">
            <Button type="submit" isLoading={isLoading} disabled={isLoading}>
              {t("login")}
            </Button>
          </div>
        </LoginFormInputs>
      </form>
    </FormProvider>
  );
};
