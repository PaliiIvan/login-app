import { Card } from "../../ui-components";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const ForgotPasswordCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ForgotPasswordPage = () => {
    const { t } = useTranslation();
    return <Card>
        <ForgotPasswordCard>
            <p>{t('forgot_password_description')}</p>
        </ForgotPasswordCard>
    </Card>;
};