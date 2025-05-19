import React from 'react';

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Go", level: 70 },
      { name: "Rust", level: 65 },
    ]
  },
  {
    name: "Backend Technologies",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Docker", level: 75 },
    ]
  },
  {
    name: "DevOps & Security",
    skills: [
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Network Security", level: 85 },
      { name: "Penetration Testing", level: 75 },
      { name: "Cryptography", level: 70 },
    ]
  }
];

const SkillsContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">Skills & Expertise</h2>
      
      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-400">{category.name}</h3>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-blue-400">Certifications</h3>
        <ul className="list-disc list-inside pl-2 space-y-1">
          <li>Certified Information Systems Security Professional (CISSP)</li>
          <li>AWS Certified Solutions Architect</li>
          <li>Certified Ethical Hacker (CEH)</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsContent;