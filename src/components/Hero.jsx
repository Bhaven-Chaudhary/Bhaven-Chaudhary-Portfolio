// src/components/Hero.jsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0f1123]"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl text-teal-400 mb-3 font-mono">
        Hi, my name is
      </h2>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 leading-tight">
        <span className="text-teal-400">Bhaven Chaudhary</span>
      </h1>

      <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
        Frontend Developer with 4+ years of experience crafting responsive,
        user-first web apps using <strong className="text-white">React</strong>,{" "}
        <strong className="text-white">Vue</strong>, and modern JavaScript
        frameworks. Passionate about intuitive UI, clean code, and scalable
        architecture. I thrive in collaborative, fast-paced environments.
      </p>

      <div className="mt-2 flex flex-col sm:flex-row gap-4 mb-6">
        {/* View My Work Button */}
        <a
          href="#projects"
          className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-200"
        >
          View My Work
        </a>

        {/* Download CV Button */}
        <a
          href="/resume.pdf" // <- Replace this with actual resume path
          download
          className="border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-teal-400 hover:text-black transition-colors duration-200"
        >
          Download CV
        </a>
      </div>

      {/* ----- Social icons ----- */}
      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your‑linkedin‑id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
        >
          <Linkedin size={28} strokeWidth={1.8} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/your‑github‑id"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
        >
          <Github size={28} strokeWidth={1.8} />
        </a>

        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          aria-label="Email"
          className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
        >
          <Mail size={28} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  );
}
