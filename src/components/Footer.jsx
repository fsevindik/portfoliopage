import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-black/20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/fsevindik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/f%C4%B1rat-sevindik-7660a8282/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/f.z.sevindik?igsh=MThmNWc4b2NyZzVhNg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
          
          <p className="italic text-sm text-white/70 font-light mb-4">
            {t("footer_quote")}
          </p>
          <p className="text-xs text-gray-500">
            {t("footer_rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};
