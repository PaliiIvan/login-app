import { useTranslation } from "react-i18next";
import {
  LoginFormTitle,
  LoginFormTitleText,
  LoginFormTitleDescription,
} from "./styles";

export const FormTitle = () => {
  const { t, i18n } = useTranslation();

  return (
    <LoginFormTitle>
      <LoginFormTitleText>{t("login_title")}</LoginFormTitleText>
      <LoginFormTitleDescription>
        {t("login_description")}
      </LoginFormTitleDescription>
    </LoginFormTitle>
  );
};
