import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";
import PortfolioVideo from "../PortfolioVideo";


export const About = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Chakra UI",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Ubuntu",
    "Linux",
    "Docker", 
  ];

  const additionalSkills = [
    "Git",
    "Arduino",
    "Skype",
    "Microsoft Teams",
    "Discord",
    "Slack",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("about_title")}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {t("about_description")}
            </p>
            
         
            <div className="mb-6">
              <PortfolioVideo />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("frontend_skills")}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("backend_skills")}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {additionalSkills.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">
                  {t("additional_skills")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{t("education")}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> 
                    {t("education_university")}:
                  </strong>
                </li>
                <li>
                  {t("education_description")}
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {t("professional_background")}
              </h3>
              <div className="text-gray-300 space-y-2">
                <p>{t("background_abilities")}</p>
                
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;