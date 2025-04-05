import { useState } from "react";
import { useTranslation } from "react-i18next";

const TranslationButton = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <button
      className="relative text-gray-300 hover:text-white transition-colors cursor-pointer"
      onClick={() => handleLanguageChange(selectedLanguage === "en" ? "tr" : "en")}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
          selectedLanguage === "en" ? "opacity-100" : "opacity-0"
        }`}
      >
        EN
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
          selectedLanguage === "tr" ? "opacity-100" : "opacity-0"
        }`}
      >
        TR
      </span>
    </button>
  );
};

export default TranslationButton;
