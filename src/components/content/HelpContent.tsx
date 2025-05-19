import React from "react";

const HelpContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">Available Commands</h2>

      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">about</div>
          <div className="col-span-9 md:col-span-10">
            View information about me
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">projects</div>
          <div className="col-span-9 md:col-span-10">
            View my portfolio projects
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">skills</div>
          <div className="col-span-9 md:col-span-10">
            List my technical skills and expertise
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">
            experience
          </div>
          <div className="col-span-9 md:col-span-10">
            View my professional experience
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">contact</div>
          <div className="col-span-9 md:col-span-10">
            View contact information
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">clear</div>
          <div className="col-span-9 md:col-span-10">
            Clear the terminal screen
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">ls</div>
          <div className="col-span-9 md:col-span-10">
            List available files and directories
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">cat</div>
          <div className="col-span-9 md:col-span-10">
            Display the contents of a file
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">whoami</div>
          <div className="col-span-9 md:col-span-10">Display current user</div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">date</div>
          <div className="col-span-9 md:col-span-10">
            Display current date and time
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 md:col-span-2 text-pink-400">echo</div>
          <div className="col-span-9 md:col-span-10">
            Display a line of text
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 p-3 rounded">
        <h3 className="text-lg font-semibold text-yellow-400 mb-2">Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            Use <span className="text-blue-400">Tab</span> key to autocomplete
            commands
          </li>
          <li>
            Press <span className="text-blue-400">Up/Down</span> arrows to
            navigate command history
          </li>
          <li>
            Try typing <span className="text-pink-400">ls</span> to see
            available files
          </li>
          <li>
            Use <span className="text-pink-400">cat readme.txt</span> to view
            the readme file
          </li>
        </ul>
      </div>

      <div className="text-gray-400 italic">
        There might be some hidden commands too... explore to find them!
      </div>
    </div>
  );
};

export default HelpContent;
