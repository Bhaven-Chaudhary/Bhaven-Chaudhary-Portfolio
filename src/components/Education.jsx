export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Electronics and Telecommunication",
      institution: "Vishwakarma Institute of Information Technology",
      university: "Savitribai Phule Pune University",
      year: "2017 – 2020",
      cgpa: "8.4",
    },
    {
      degree: "Diploma in Electronics and Telecommunication",
      institution: "Government Polytechnic Nagpur",
      university: "Autonomous Institute",
      year: "2014 – 2016",
      cgpa: "7.4",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6
                 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900
                 text-gray-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-14">
          Education
        </h2>

        {/* Education cards grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900
                         p-8 rounded-2xl border border-slate-700
                         shadow-md hover:shadow-2xl hover:border-teal-500
                         transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-teal-300 mb-2">
                {edu.degree}
              </h3>

              <p className="text-lg text-gray-200 font-medium mb-1">
                {edu.institution}
              </p>

              <p className="text-sm text-gray-400 italic mb-4">
                {edu.university} • {edu.year}
              </p>

              <p className="text-base text-gray-300">
                CGPA:{" "}
                <span className="font-semibold text-teal-400">{edu.cgpa}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}