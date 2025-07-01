import { Link } from "../../../../ui-components";
import { useTranslation } from "react-i18next";
import {
  RequestHelp as RequestHelpContainer,
  RequestHelpTitle,
} from "./styles";

export const RequestHelp = () => {
  const { t } = useTranslation();

  return (
    <RequestHelpContainer>
      <RequestHelpTitle>{t("request_help_title")}</RequestHelpTitle>
      <div className="request_help_description">
        <Link href="mailto:help@login.app" global>
          help@login.app
        </Link>
      </div>
    </RequestHelpContainer>
  );
};
