// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Specialist",
      company: "Dassault Systemes",
      period: "Sep 2022 - Present",
      responsibilities: [
        "Led frontend development for a SaaS platform using React.js, reducing UI bugs by 35%; refactored a Vue.js CRM module to improve code quality and user engagement by 20%.",
        "Optimized development with reusable React components and contributed to a scalable design system.",
        "Integrated AI-based ticket assistant by consuming internal APIs and crafting prompts to retrieve relevant past tickets, improving resolution speed.",
        "Built UI to display LLM responses and capture feedback, to continuous fine-tune of the support agent.",
      ],
    },
    {
      role: " System Engineer",
      company: "Infosys",
      period: "Feb 2021 - Sep 2022",
      responsibilities: [
        "Developed full-stack features using React.js and Spring Boot, shipping 12+ components across client apps.",
        "Reduced frontend errors by 15% by improving API integrations and logging mechanisms.",
        "Improved form flows and UI with cross-functional collaboration, increasing submission rates by 18%.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-gray-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-teal-500/20 hover:border-teal-500 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-teal-300 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 italic mb-4">{exp.period}</p>

              <ul className="list-disc pl-6 space-y-2 text-gray-400 text-base">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
