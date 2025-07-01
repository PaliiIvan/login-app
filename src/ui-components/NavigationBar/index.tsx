import Logo from "../../assets/logo.svg?react";
import { LanguageSelect } from "../LanguageSelect";
import { useTranslation } from "react-i18next";
import {
  StyledNavigationBar,
  LogoContainer,
  LinksContainer,
  StyledNavLink,
} from "./styles";

export const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavigationBar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinksContainer>
        <StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("home")}
        </StyledNavLink>
        <StyledNavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("logout")}
        </StyledNavLink>
        <LanguageSelect />
      </LinksContainer>
    </StyledNavigationBar>
  );
};
