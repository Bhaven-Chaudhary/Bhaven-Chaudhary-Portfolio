// src/components/Contact.jsx
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SocialIcon from "./SocialIcon";

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
          +91 8554955143
        </p>

        {/* Social Icons */}
        <SocialIcon />
      </div>
    </section>
  );
}
