import React, { useState } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Led the development of responsive web applications using React and TypeScript. Implemented state management solutions and optimized performance.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained client websites and web applications. Collaborated with designers to implement responsive UI components.",
    technologies: ["JavaScript", "React", "CSS", "HTML"]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Creations",
    period: "2018 - 2020",
    description: "Assisted in the development of websites and web applications. Learned and implemented modern web development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  },
  {
    id: 4,
    title: "Computer Science Student",
    company: "University of Technology",
    period: "2016 - 2018",
    description: "Completed Bachelor's degree in Computer Science with focus on web technologies. Participated in coding competitions and hackathons.",
    technologies: ["Java", "Python", "Web Development", "Algorithms"]
  }
];

const ExperienceContent: React.FC = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    if (expandedExperience === id) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(id);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">Professional Experience</h2>
      
      <p className="mb-4">Below is my professional experience. Type the number to see details.</p>
      
      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-gray-700 p-3 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-400">
                  {exp.id}. {exp.title}
                </h3>
                <p className="text-gray-300">{exp.company} | {exp.period}</p>
              </div>
              <button 
                onClick={() => toggleExperience(exp.id)}
                className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs"
              >
                {expandedExperience === exp.id ? 'hide' : 'show'}
              </button>
            </div>
            
            {expandedExperience === exp.id && (
              <div className="mt-3 pl-4 border-l-2 border-gray-700">
                <p className="mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-800 text-pink-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-gray-400 italic">
        Type 'skills' to see my technical skills or 'projects' to view my portfolio.
      </div>
    </div>
  );
};

export default ExperienceContent;
