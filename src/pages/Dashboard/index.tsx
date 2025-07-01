import { Card } from "../../ui-components";
import { DashboardCard } from "./styles";
import { useTranslation } from "react-i18next";

export const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <DashboardCard>
        <p>{t("dashboard_description")}</p>
      </DashboardCard>
    </Card>
  );
};
