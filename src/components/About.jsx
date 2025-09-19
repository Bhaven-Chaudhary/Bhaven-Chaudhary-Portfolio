// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950 align-center text-gray-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-7">
          I’m a{" "}
          <span className="text-teal-400 font-medium">Frontend Developer</span>{" "}
          with 4+ years of experience building responsive, accessible, and
          scalable web applications. I specialize in{" "}
          <span className="text-teal-400 font-medium">React.js</span>,{" "}
          <span className="text-teal-400 font-medium">Vue.js</span>,{" "}
          <span className="text-teal-400 font-medium">JavaScript</span>, and{" "}
          <span className="text-teal-400 font-medium">
            Front End Development
          </span>
          , and I thrive on transforming complex ideas into intuitive and
          elegant user interfaces.
        </p>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7">
          I focus on writing clean, maintainable code with performance in mind.
          Whether collaborating on a team or building independently, I’m always
          exploring better tools and techniques to create smooth, engaging
          digital experiences. Beyond the screen, I enjoy staying current with
          UI/UX trends and sharing knowledge with the developer community.
        </p>
      </div>
    </section>
  );
}
