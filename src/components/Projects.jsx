// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built using React and Tailwind CSS. Includes smooth scroll, reusable components, and contact form.",
      tech: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather application using OpenWeatherMap API. Displays weather info with location search.",
      tech: ["React", "API", "CSS"],
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A CRUD app to manage daily tasks. Includes authentication, filtering, and data persistence.",
      tech: ["React", "LocalStorage", "Hooks"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-90 to-slate-900 text-gray-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* ✅ Unified heading style */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center">
          Projects
        </h2>

        <div className="flex flex-wrap gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8
                 rounded-2xl border border-slate-700
                 w-full sm:w-[calc(50%-1rem)] min-h-[340px]
                 flex flex-col justify-between
                 shadow-md hover:shadow-2xl hover:border-teal-500
                 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-extrabold text-teal-300 tracking-wide">
                  {project.title}
                </h3>
                <span className="text-teal-400 text-lg">⚡</span>
              </div>

              {/* Description */}
              <p className="text-[15px] text-gray-200/90 leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-200 mb-2 font-mono">
                  Tech&nbsp;Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium border border-teal-400/30 hover:border-teal-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Link */}
              {project.link && (
                <div className="border-t border-slate-700 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 text-sm font-semibold
                       hover:text-teal-300 hover:underline transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
