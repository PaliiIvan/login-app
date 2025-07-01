import { useState, useMemo, useCallback } from "react";
import ukFlag from "../../assets/icons/uk.png";
import frFlag from "../../assets/icons/fr.png";
import deFlag from "../../assets/icons/de.png";
import { Select, type Option } from "../Select";
import { LANGUAGES } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import {
  LanguageSelectContainer,
  LanguageOptionContent,
  FlagIcon,
  OptionText,
} from "./styles";

const languageOptions = [
  { value: LANGUAGES.EN, label: "En", flagUrl: ukFlag },
  { value: LANGUAGES.FR, label: "Fr", flagUrl: frFlag },
  { value: LANGUAGES.DE, label: "De", flagUrl: deFlag },
];

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const options = useMemo<Option[]>(() => {
    return languageOptions.map((opt) => ({
      ...opt,
      formatLabel: () => (
        <LanguageOptionContent>
          <FlagIcon>
            <img src={opt.flagUrl} alt={`${opt.label}_flag`} />
          </FlagIcon>
          <OptionText>{opt.label}</OptionText>
        </LanguageOptionContent>
      ),
    }));
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState<Option>(() => {
    return options.find((opt) => opt.value === i18n.language) || options[0];
  });

  const handleLanguageChange = useCallback((option: Option) => {
    i18n.changeLanguage(option.value);
    setSelectedLanguage(option);
  }, []);

  return (
    <LanguageSelectContainer>
      <Select
        options={options}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      />
    </LanguageSelectContainer>
  );
};
