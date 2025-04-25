import { useState } from "react";

const LanguageSwitcher = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [animating, setAnimating] = useState(false);

  const handleLanguageChange = () => {
    setAnimating(true);
    setTimeout(() => {
      const newLang = selectedLanguage === "en" ? "tr" : "en";
      setSelectedLanguage(newLang);
      onLanguageChange(newLang);
      setAnimating(false); 
    }, 300); 
  };

  return (
    <button
      onClick={handleLanguageChange}
      className={`relative p-4 rounded-full transition-all duration-300 ${
        selectedLanguage === "en" ? "bg-gray-300" : "bg-blue-500"
      }`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ${
          animating ? "rotate-180" : "rotate-0"
        }`}
      >
        {selectedLanguage === "en" ? (
          <span>TR</span>
        ) : (
          <span>EN</span>
        )}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
