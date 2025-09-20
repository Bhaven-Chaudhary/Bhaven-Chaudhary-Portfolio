import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialIcon() {
  const [message, setMessage] = useState("");

  function handleCopyEmail() {
    const email = "chaudharybhaven@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => setMessage("Email copied to clipboard!"))
      .catch(() =>
        setMessage("Failed to copy — please use the Contact section")
      )
      .finally(() => setTimeout(() => setMessage(""), 2000));
  }

  return (
    <div className="flex gap-8 items-center overflow-visible justify-center">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/bhaven-chaudhary-46931015a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
      >
        <Linkedin size={30} strokeWidth={1.8} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Bhaven-Chaudhary"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
      >
        <Github size={30} strokeWidth={1.8} />
      </a>

      {/* Mail Icon + Tooltip */}
      <div className="relative">
        <button
          onClick={handleCopyEmail}
          aria-label="Copy email to clipboard"
          className="text-gray-400 hover:text-teal-400 hover:scale-110 transition-transform duration-200"
        >
          <Mail size={30} strokeWidth={1.8} />
        </button>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className="absolute -top-14 left-1/2 -translate-x-1/2
                         whitespace-nowrap px-3 py-1
                         bg-gray-800/95 text-teal-300 text-sm
                         rounded-lg shadow-lg ring-1 ring-teal-400/40
                         z-50 pointer-events-none animate-fadeInBounce"
          >
            {message}
            {/* Arrow pointing down */}
            <span
              className="absolute -bottom-1 left-1/2 -translate-x-1/2
                               w-2 h-2 rotate-45 bg-gray-800/95"
            />
          </div>
        )}
      </div>
    </div>
  );
}
