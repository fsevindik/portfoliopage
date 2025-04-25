import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";
import { projectsData } from "../projectsData";
import { ProjectCard } from "../ProjectCard";

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
            {t("projects_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};