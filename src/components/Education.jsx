// src/components/Education.jsx
export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Electronics and Telecommunication",
      institution: "Vishwakarma Institute of Information Technology",
      university: "Savitribai Phule Pune University",
      year: "2017 - 2020",
      cgpa: "8.4",
    },
    {
      degree: "Diploma in Electronics and Telecommunication",
      institution: "Government Polytechnic Nagpur",
      university: "Autonomous Institute",
      year: "2014 - 2016",
      cgpa: "7.4",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-24  bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Education
        </h2>

        {/* Flex wrapper to center the grid */}
        <div className="flex justify-center">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900 w-[500px] p-6 rounded-xl shadow-md hover:shadow-teal-400/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-teal-400 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-400 italic mb-3">{edu.year}</p>
                <p className="text-sm">
                  CGPA:{" "}
                  <span className="font-semibold text-white">{edu.cgpa}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
