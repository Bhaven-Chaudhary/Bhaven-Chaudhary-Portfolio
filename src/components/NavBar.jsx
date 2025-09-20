// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-md"
          : ""
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        <a
          href="#hero"
          className="font-extrabold text-xl bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-wider"
        >
          Bhaven Chaudhary
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-base font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-300 relative after:content-[''] after:block after:h-[2px] after:bg-teal-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left hover:text-teal-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Bhaven_Chaudhary_Resume.pdf"
            download="Bhaven_Chaudhary_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
