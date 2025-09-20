// src/components/Projects.jsx

import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Mystery Message",
      description:
        "Mystery Message is a full-stack web app built with Next.js 15, React 19, and TypeScript, styled using Tailwind CSS and enhanced with Radix UI components. It features secure authentication with NextAuth, data persistence via MongoDB (Mongoose), and form handling using React Hook Form with Zod validation. The app integrates AI SDK for AI-driven features and Resend for email services. Additional tools like Embla Carousel, Lucide React, and Usehooks-TS provide an interactive and modern user experience.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "AI-SDK (OpenAI)",
        "Mongoose",
        "Next-Auth",
        "React-Hook-Form",
        "Zod",
        "Radix-UI",
        "Resend (Email API)",
        "TailwindCSS",
        "Lucide-React",
        ,
      ],
      link: "",
      gitLink:
        "https://github.com/Bhaven-Chaudhary/Next-Js-Project/tree/main/mysterymessage",
      listPoints: [],
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix Clone - Built a dynamic Netflix-style UI using React, with Firebase Authentication, a Firebase dummy API for storing login data, and Cloud Firestore for real-time data management. Integrated YouTube trailer playback with React YouTube and movie-trailer. Used Redux and Context API for state management, with responsive design, lazy loading, and unit testing via the Testing Library suite.",
      tech: [
        "React",
        "Redux",
        "Firebase-Aut",
        "Firebase",
        "React-YouTube",
        "Movie-Trailer API",
      ],
      link: "",
      gitLink: "https://github.com/Bhaven-Chaudhary/NetflixClone",
      listPoints: [],
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built using React and Tailwind CSS. Includes smooth scroll, reusable components which are designed to scale application with ease",
      tech: ["React", "Tailwind", "Vite", "Lucid React"],
      link: "",
      gitLink: "#",
      listPoints: [],
    },
    {
      title: "Course Management App",
      description:
        "CourseApp - Built a responsive web application using React 18 that allows users to perform full CRUD operations on course data (title, description, etc.). Integrated a Spring Boot backend using RESTful APIs for server-side operations. The frontend features clean UI design, toast notifications with React Toastify, and API handling using Axios. Application was tested with React Testing Library and bootstrapped with Create React App.",
      tech: [
        "React",
        "Axios",
        "React Toastify",
        "REST API",
        "Spring Boot (Backend)",
      ],
      link: "",
      gitLink: "https://github.com/Bhaven-Chaudhary/ReactJs-springBoot-Project",
      listPoints: [],
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
                 flex flex-col shadow-md hover:shadow-2xl hover:border-teal-500
                 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-extrabold text-teal-300 tracking-wide">
                  {project.title}
                </h3>
                <span className="text-teal-400 text-lg">⚡</span>
              </div>
              <div className="flex flex-col justify-between h-full">
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
              </div>

              {/* Footer Link */}

              <div className="border-t border-slate-700 pt-4 flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 text-sm font-semibold
                       hover:text-teal-300 hover:underline transition-colors"
                >
                  <Github />
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 text-sm font-semibold
                       hover:text-teal-300 hover:underline transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
