import {
  LoginPageContainer,
  LoginFormCard,
  LoginFormContainer,
  AdvertisementCartsContainer,
  ActionRow,
  AppName,
} from "./styles";

import Logo from "../../assets/logo.svg?react";
import { Form } from "./components/Form";
import { Advertisement } from "./components/Advertisement";
import { LanguageSelect } from "../../ui-components";


export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginFormCard>
        <LoginFormContainer>
          <ActionRow>
            <AppName>
              <Logo />
            </AppName>
            <div>
              <LanguageSelect />
            </div>
          </ActionRow>
          <div>
            <Form />
          </div>
        </LoginFormContainer>
        <AdvertisementCartsContainer>
          <Advertisement />
        </AdvertisementCartsContainer>
      </LoginFormCard>
    </LoginPageContainer>
  );
};
