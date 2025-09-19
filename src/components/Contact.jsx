// src/components/Contact.jsx
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-gray-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10">
          Let's Connect
        </h2>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Whether it’s a project, a question, or just a hello, I’d love to hear
          from you. Reach out via LinkedIn, email, or phone and I’ll get back to
          you as soon as possible!
        </p>

        {/* Phone Number */}
        <p className="text-base font-medium text-teal-400 mb-8">
          <Phone size={20} className="inline mr-2" />
          +91 12345 67890
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
          >
            <Linkedin size={30} strokeWidth={1.8} />
          </a>

          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
          >
            <Github size={30} strokeWidth={1.8} />
          </a>

          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
          >
            <Mail size={30} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
