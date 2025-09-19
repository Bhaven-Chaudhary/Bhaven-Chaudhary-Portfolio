// src/components/Skills.jsx

const TechSkills = [
  {
    name: "Frontend",
    values: [
      "React.js (Hooks, Redux Toolkit)",
      "Vue.js (Pinia)",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
      "Element Plus",
    ],
  },
  {
    name: "Backend",
    values: ["MongoDB", "Java (Spring Boot)", "REST API Development"],
  },
  {
    name: "Languages",
    values: ["JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  {
    name: "Tools & DevOps",
    values: ["SonarQube", "Git", "GitHub", "GitLab"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900 text-gray-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          My Tech Arsenal
        </h2>

        {TechSkills.map(({ name, values }) => (
          <div key={name} className="mb-10 text-left">
            {/* Skill Group Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 font-mono">
              {name}
            </h3>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {values.map((skill) => (
                <span
                  key={skill}
                  className="border border-cyan-400 text-cyan-400 py-2 px-4 rounded-full
                             transition-all duration-300 ease-in-out
                             hover:bg-cyan-400 hover:text-slate-900
                             hover:shadow-md hover:scale-105
                             text-sm sm:text-base cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
