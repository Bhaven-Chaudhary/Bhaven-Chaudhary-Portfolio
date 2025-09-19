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
    <section id="experience" className="py-20 px-6 bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-primary font-medium">{exp.company}</p>
              <p className="text-xs text-gray-400 italic mb-3">{exp.period}</p>
              <ul className="list-disc text-sm text-gray-400 pl-5 space-y-1">
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
    