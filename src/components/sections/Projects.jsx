import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Some of My Projects
        </h2>
  
        <div className="mb-8 text-center">
          <div className="relative py-3 px-2 max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-lg transform rotate-1"></div>
            <div className="relative">
              <blockquote className="italic text-sm sm:text-base text-white/80 font-light">
                What I have done guarantees what I will do.
              </blockquote>
              <div className="mt-1 w-12 h-px bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> Cloning Todoist </h3>
            <p className="text-gray-400 mb-4">
              Cloning Todoist under professional mentorship was my first
              project, implementing modern web technologies including HTML, CSS,
              and JavaScript. Leveraged Chakra UI for a polished user interface
              design, while utilizing Slack for efficient team communication.
              This project provided valuable experience with real-world
              development practices and professional project management
              methodologies.
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
                View Project →
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
            <h3 className="text-xl font-bold mb-2">Cloning StoroyEstimate </h3>
            <p className="text-gray-400 mb-4">
              'Story Estimate' is a collaborative process where team members
              assess the complexity of tasks using Planning Poker. Team members
              independently estimate effort using Fibonacci numbers
              (1,2,3,5,8,13), then discuss to reach consensus. The final story
              point calculation helps in sprint planning and velocity tracking
              in agile development.
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
                View Project →
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
            <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
            <p className="text-gray-400 mb-4">
              Full-stack(MERN) e-commerce with modern UI developed by Next.js,
              user authentication and customizable product inventory.
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
                View Project →
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
              Filmoliog: My Personal Movie Journal
            </h3>
            <p className="text-gray-400 mb-4">
              Hey! This is my movie review site that I built while learning web development.
              I'm a huge movie fan, so I thought why not create something fun? Using the MERN
              stack, I packed it with cool features like user profiles and live comments.
              It's been amazing putting everything I've learned into practice - and I'm still
              learning new things to add! The best part is seeing movie lovers chat about
              their favorite films. Want to see how I built it? Just click the image to
              check out my code!
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
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};