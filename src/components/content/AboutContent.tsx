import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">About Me</h2>
      
      <p>
        Hello! I'm a passionate developer specializing in [your specialty]. 
        With [X] years of experience, I've developed expertise in [technologies].
      </p>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-400">Background</h3>
        <p>
          I started my journey in tech when [your story]. Since then, I've worked on
          various projects ranging from [types of projects].
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-400">Education</h3>
        <p>
          [Your degree] - [Your university] ([graduation year])
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-400">Interests</h3>
        <p>
          When I'm not coding, I enjoy [hobbies/interests].
        </p>
      </div>
      
      <div className="mt-4 text-gray-400 italic">
        Type 'projects' to see my work or 'contact' to get in touch.
      </div>
    </div>
  );
};

export default AboutContent;