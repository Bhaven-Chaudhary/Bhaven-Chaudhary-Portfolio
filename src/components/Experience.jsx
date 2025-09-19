// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Pvt. Ltd.",
      period: "Jan 2022 – Present",
      responsibilities: [
        "Developed and maintained web applications using React and Tailwind CSS.",
        "Collaborated with UI/UX designers to build responsive, accessible interfaces.",
        "Implemented reusable components and optimized performance.",
      ],
    },
    {
      role: "Frontend Intern",
      company: "Creative Web Agency",
      period: "Jul 2020 – Dec 2021",
      responsibilities: [
        "Worked on live projects using HTML, CSS, and JavaScript.",
        "Converted Figma designs to pixel-perfect responsive layouts.",
        "Learned component-based architecture with React basics.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-gray-300"
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