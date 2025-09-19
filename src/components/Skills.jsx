export default function Skills() {
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

  return (
    <section
      id="skills"
      className="py-24 pb-0 px-6
                 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950
                 text-gray-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-14 text-center">
          My Tech Arsenal
        </h2>

        {TechSkills.map(({ name, values }) => (
          <div key={name} className="mb-12">
            {/* Skill category title */}
            <h3 className="text-2xl font-bold text-teal-300 mb-6 tracking-wide">
              {name}
            </h3>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-3">
              {values.map((skill) => (
                <span
                  key={skill}
                  className="bg-teal-500/20 text-teal-300
                             border border-teal-500/30
                             px-4 py-2 rounded-full
                             text-sm sm:text-base font-medium
                             transition-colors duration-300
                             hover:border-teal-400 hover:bg-teal-500/30"
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
