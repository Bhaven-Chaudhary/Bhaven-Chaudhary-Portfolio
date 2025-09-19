export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6
                 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950
                 text-gray-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Larger, responsive heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
          About Me
        </h2>

        {/* Larger paragraph text */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-8">
          I’m a{" "}
          <span className="text-teal-400 font-semibold">
            Frontend Developer
          </span>{" "}
          with 4+ years of experience building responsive, accessible, and
          scalable web applications. I specialize in{" "}
          <span className="text-teal-400 font-semibold">React.js</span>,{" "}
          <span className="text-teal-400 font-semibold">Vue.js</span>,{" "}
          <span className="text-teal-400 font-semibold">JavaScript</span>, and{" "}
          <span className="text-teal-400 font-semibold">
            Front End Development
          </span>
          , and I thrive on transforming complex ideas into intuitive and
          elegant user interfaces.
        </p>

        <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-8">
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
