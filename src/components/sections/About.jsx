import React from "react";

export const About = () => {
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
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate software developer with a strong military background,
            leveraging disciplined leadership experience in technology
            solutions. Committed to delivering innovative and scalable web
            applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
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
              <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
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
              <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
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
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Turkish Military Academy</strong>
              </li>
              <li>Advanced Leadership and Strategic Management Training</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              💼 Professional Background
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>Military Leadership and Public Relations Professional</p>
              <p>
                Developed strong leadership, communication, and strategic
                planning skills through roles in:
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
