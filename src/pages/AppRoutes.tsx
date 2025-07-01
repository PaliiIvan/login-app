import { createBrowserRouter } from "react-router";
import { LoginPage } from "./Login";
import { DashboardPage } from "./Dashboard";
import { Layout } from "./Layout";
import { ForgotPasswordPage } from "./ForgotPassword";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
