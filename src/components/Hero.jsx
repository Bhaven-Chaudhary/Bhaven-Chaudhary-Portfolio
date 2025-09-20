// src/components/Hero.jsx
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6
                 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      {/* Intro line */}
      <h2 className="text-lg sm:text-xl md:text-2xl text-teal-400 mb-4 font-mono tracking-wide">
        Hi, my name is
      </h2>

      {/* Main heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
        <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Bhaven Chaudhary
        </span>
      </h1>

      {/* Subtitle / description */}
      <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
        Frontend Developer with 4+ years of experience crafting responsive,
        user-first web apps using <strong className="text-white">React</strong>,{" "}
        <strong className="text-white">Vue</strong>, and modern JavaScript
        frameworks. Passionate about intuitive UI, clean code, and scalable
        architecture. I thrive in collaborative, fast-paced environments.
      </p>

      {/* CTA buttons */}
      <div className="mt-2 flex flex-col sm:flex-row gap-5 mb-10">
        <a
          href="#projects"
          className="bg-teal-400 text-black px-8 py-3 rounded-2xl font-semibold
                     hover:bg-teal-300 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
        >
          View My Work
        </a>

        <a
          href="/Bhaven_Chaudhary_Resume.pdf"
          download="Bhaven_Chaudhary_Resume.pdf"
          className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-2xl font-semibold
                     hover:bg-teal-400 hover:text-black hover:-translate-y-0.5 transition-all duration-200 shadow-md"
        >
          Download CV
        </a>
      </div>

      {/* Social Icons */}
      <SocialIcon />
    </section>
  );
}
