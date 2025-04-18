import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
         {t("projects_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> {t("project_1_title")} </h3>
            <p className="text-gray-400 mb-4">
              {t("project_1_description")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React",
                "Node.js",
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Chakra UI",
                "Slack",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                      "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/fsevindik/React_ToDo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {t("view_project")} 
              </a>
            </div>
          </div>
          <div
            className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
          >
            <h3 className="text-xl font-bold mb-2">{t("project_2_title")}</h3>
            <p className="text-gray-400 mb-4">
             {t("project_2_description")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "TypeScript", "Chackra UI"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/fsevindik/clone-Story-Estimate/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {t("view_project")} 
              </a>
            </div>
          </div>

          <div
            className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
          >
            <h3 className="text-xl font-bold mb-2">
              {t("project_3_title")}
            </h3>
            <p className="text-gray-400 mb-4">
              {t("project_3_description")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Next Auth",
                "MongoDB",
                "Node",
                "bcrypt",
                "prisma",
                "react-hook-form",
                "react-icons",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/fsevindik/ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {t("view_project")} 
              </a>
            </div>
          </div>

          <div
            className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
          >
            <h3 className="text-xl font-bold mb-2">
            {t("project_4_title")}
            </h3>
            <p className="text-gray-400 mb-4">
           {t("project_4_description")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "MongoDB",
                "Express",
                "React",
                "Node.js",
                "Tailwind CSS",
                "..and the more",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <a
                href="https://github.com/fsevindik/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {t("view_project")} 
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};