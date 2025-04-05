import { RevealOnScroll } from "../RevealOnScroll";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const handleLocationClick = () => {
    window.open("https://www.google.com/maps?q=Ankara,Turkey", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+905462522923";
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {t("greeting")}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={handleLocationClick}
              title="Click to view on Google Maps"
            >
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <span>Ankara, Turkey</span>
            </div>

            <div
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors"
              onClick={handlePhoneClick}
              title="Click to call"
            >
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <span>+90 546 252 29 23 </span>
            </div>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {t("home_description")}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              {t("view_projects")}
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              {t("contact_me")}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
