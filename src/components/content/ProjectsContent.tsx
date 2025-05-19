import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A secure authentication system with multi-factor auth",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/yourusername/project-alpha",
    details: "This project implements secure user authentication with JWT token handling, password hashing, and multi-factor authentication. It includes rate limiting and protection against common security vulnerabilities."
  },
  {
    id: 2,
    name: "DataVault",
    description: "Encrypted database system for sensitive information",
    technologies: ["Python", "PostgreSQL", "Docker", "Flask"],
    link: "https://github.com/yourusername/datavault",
    details: "DataVault provides end-to-end encryption for database records, with granular access controls and comprehensive audit logging. It's designed for organizations needing to store sensitive customer information while maintaining compliance with data protection regulations."
  },
  {
    id: 3,
    name: "NetScan",
    description: "Network vulnerability scanner",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    link: "https://github.com/yourusername/netscan",
    details: "NetScan is a tool for identifying potential security vulnerabilities in networked systems. It performs port scanning, service enumeration, and baseline security checks with detailed reporting and remediation suggestions."
  }
];

const ProjectsContent: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">Projects</h2>
      
      <p className="mb-4">Below are some of the projects I've worked on. Type the number to see details.</p>
      
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-700 p-3 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-400">
                  {project.id}. {project.name}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              <button 
                onClick={() => toggleProject(project.id)}
                className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs"
              >
                {expandedProject === project.id ? 'hide' : 'show'}
              </button>
            </div>
            
            {expandedProject === project.id && (
              <div className="mt-3 pl-4 border-l-2 border-gray-700">
                <p className="mb-2">{project.details}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-800 text-yellow-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline text-sm"
                >
                  View Repository →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-gray-400 italic">
        Use 'cat projects/[project-name]' to view project details.
      </div>
    </div>
  );
};

export default ProjectsContent;