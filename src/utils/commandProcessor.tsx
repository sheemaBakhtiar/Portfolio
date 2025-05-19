import React from 'react';
import AboutContent from '../components/content/AboutContent';
import ProjectsContent from '../components/content/ProjectsContent';
import SkillsContent from '../components/content/SkillsContent';
import ContactContent from '../components/content/ContactContent';
import HelpContent from '../components/content/HelpContent';

type CommandResult = {
  output: React.ReactNode;
  isError?: boolean;
};

// List of available commands
const COMMANDS = {
  ABOUT: 'about',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONTACT: 'contact',
  HELP: 'help',
  CLEAR: 'clear',
  LS: 'ls',
  CAT: 'cat',
  ECHO: 'echo',
  DATE: 'date',
  WHOAMI: 'whoami',
};

// Files for cat command
const FILES: Record<string, React.ReactNode> = {
  'readme.txt': (
    <div>
      <p className="mb-2">## Terminal Portfolio</p>
      <p>This is a terminal-style portfolio made with React and TypeScript.</p>
      <p>Type 'help' to see available commands.</p>
    </div>
  ),
  'contact.txt': (
    <div>
      <p>Email: your.email@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourusername</p>
    </div>
  ),
};

export const commandProcessor = (command: string): CommandResult => {
  // Clean up the command
  const trimmedCommand = command.trim().toLowerCase();
  const [baseCommand, ...args] = trimmedCommand.split(' ');

  // Process commands
  switch (baseCommand) {
    case COMMANDS.HELP:
      return { output: <HelpContent /> };
      
    case COMMANDS.ABOUT:
      return { output: <AboutContent /> };
      
    case COMMANDS.PROJECTS:
      return { output: <ProjectsContent /> };
      
    case COMMANDS.SKILLS:
      return { output: <SkillsContent /> };
      
    case COMMANDS.CONTACT:
      return { output: <ContactContent /> };
      
    case COMMANDS.CLEAR:
      // Clear command will be handled in the Terminal component
      return { output: 'Clearing terminal...' };
      
    case COMMANDS.LS:
      return {
        output: (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <span className="text-blue-400">readme.txt</span>
            <span className="text-blue-400">contact.txt</span>
            <span className="text-yellow-400">about/</span>
            <span className="text-yellow-400">projects/</span>
            <span className="text-yellow-400">skills/</span>
          </div>
        ),
      };
      
    case COMMANDS.CAT:
      if (args.length === 0) {
        return { output: 'Usage: cat [filename]', isError: true };
      }
      
      const filename = args[0];
      if (FILES[filename]) {
        return { output: FILES[filename] };
      } else {
        return { output: `File not found: ${filename}`, isError: true };
      }
      
    case COMMANDS.ECHO:
      return { output: args.join(' ') };
      
    case COMMANDS.DATE:
      return { output: new Date().toString() };
      
    case COMMANDS.WHOAMI:
      return { output: 'guest@portfolio' };
      
    default:
      if (trimmedCommand === '') {
        return { output: '', isError: false };
      }
      return {
        output: (
          <div>
            <span className="text-red-500">Command not found: {baseCommand}</span>
            <div>Type 'help' to see available commands.</div>
          </div>
        ),
        isError: true,
      };
  }
};

// Function to get command suggestions based on input
export const getCommandSuggestions = (input: string): string[] => {
  const commandValues = Object.values(COMMANDS);
  
  if (!input) return commandValues;
  
  return commandValues.filter(cmd => 
    cmd.startsWith(input.toLowerCase())
  );
};