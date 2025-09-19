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
        scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        <a
          href="#hero"
          className="text-primary font-bold text-xl tracking-wide"
        >
          Bhaven Chaudhary
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-base tracking-wide font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/path/to/resume.pdf" // replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 border border-teal-400 px-4 py-1 rounded hover:bg-teal-400 hover:text-black transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
