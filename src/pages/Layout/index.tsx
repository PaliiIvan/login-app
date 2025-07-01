import { Outlet } from "react-router";
import { NavigationBar } from "../../ui-components";
import { PageLayout } from "./styles";

export const Layout = () => {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
