import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  TerminalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Navigation from "./Navigation";

interface LandingPageContentProps {
  onOpenTerminal: () => void;
}

const LandingPageContent: React.FC<LandingPageContentProps> = ({
  onOpenTerminal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const profilePicRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial state
    gsap.set(
      [
        headerRef.current,
        profilePicRef.current,
        aboutRef.current,
        projectsRef.current,
        contactRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Animation sequence
    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        profilePicRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.2,
        },
        "-=0.2"
      )
      .to(
        aboutRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        projectsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        contactRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-900 text-white font-mono p-4 md:p-8 opacity-0"
    >
      <Navigation onOpenTerminal={onOpenTerminal} />
      {/* Header Section */}
      {/* Header and Profile Picture Section - Centered Vertically */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-24 mb-16">
        <header ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-400 mb-4">
            Sheema Bakhtiar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Software Developer & Tech Enthusiast
          </p>
        </header>

        {/* Profile Picture Section */}
        <div ref={profilePicRef} className="flex flex-col items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg hover:shadow-pink-400/50 transition-all duration-300 transform hover:scale-105">
            {/* Your actual profile image */}
            <img
              src="/src/public/me.jpg"
              alt="Sheema Bakhtiar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Quote below profile picture */}
          <p className="mt-4 text-pink-400 font-light italic text-lg tracking-wide transform">
            "<em>i love creating webapps</em>"
          </p>
        </div>
      </div>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="max-w-4xl mx-auto mb-20 p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 border-b border-gray-700 pb-2 flex items-center">
          <img
            src="/src/public/4092564_profile_about_mobile ui_user_icon.png"
            alt="About Icon"
            className="w-10 h-10 mr-3 opacity-90 filter hue-rotate-60 brightness-110"
          />
          About Me
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Hello! I'm Sheema Bakhtiar, a passionate software developer
            specializing in web development and user interface design. With a
            strong foundation in modern technologies, I create efficient,
            scalable, and user-friendly applications.
          </p>
          <p>
            My journey in tech began with a fascination for how software can
            solve real-world problems. Since then, I've worked on various
            projects ranging from web applications to mobile solutions.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-pink-400 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                HTML/CSS
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Git
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                UI/UX Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="max-w-4xl mx-auto mb-20 p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 border-b border-gray-700 pb-2 flex items-center">
          <img
            src="/src/public/3994346_code_coding_css_html_programming_icon.png"
            alt="Projects Icon"
            className="w-10 h-10 mr-3 opacity-90 filter hue-rotate-180 brightness-110"
          />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-400 mb-2">
                Project Alpha
              </h3>
              <p className="text-gray-300 mb-3">
                A secure authentication system with multi-factor auth
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  Express
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
              <a
                href="https://github.com/yourusername/project-alpha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline flex items-center text-sm"
              >
                View Repository <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-400 mb-2">
                DataViz Pro
              </h3>
              <p className="text-gray-300 mb-3">
                Interactive data visualization dashboard
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  D3.js
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  Firebase
                </span>
              </div>
              <a
                href="https://github.com/yourusername/dataviz-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline flex items-center text-sm"
              >
                View Repository <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-400 mb-2">NetScan</h3>
              <p className="text-gray-300 mb-3">
                Network vulnerability scanner
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  Go
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
              <a
                href="https://github.com/yourusername/netscan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline flex items-center text-sm"
              >
                View Repository <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="max-w-4xl mx-auto mb-20 p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 border-b border-gray-700 pb-2 flex items-center">
          <img
            src="/src/public/5740092_call_communication_connection_contact_phone_icon.png"
            alt="Contact Icon"
            className="w-10 h-10 mr-3 opacity-90 filter hue-rotate-270 brightness-110"
          />
          Contact
        </h2>
        <div className="space-y-4">
          <p className="text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>

          <div className="flex flex-col space-y-3">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
            >
              <MailIcon className="mr-3" size={20} />
              <span>your.email@example.com</span>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
            >
              <GithubIcon className="mr-3" size={20} />
              <span>github.com/yourusername</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
            >
              <LinkedinIcon className="mr-3" size={20} />
              <span>linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 mt-auto">
        <p>
          © {new Date().getFullYear()} Sheema Bakhtiar | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default LandingPageContent;
