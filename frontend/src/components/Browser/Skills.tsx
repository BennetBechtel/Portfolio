// Skills.tsx
import { Code, Wind, Layout, Server, Database, Settings, Terminal, GithubIcon } from "lucide-react";

export default function() {
  const skillCategories = {
    Languages: [
      { icon: <Code size={16} />, name: "TypeScript" },
      { icon: <Code size={16} />, name: "JavaScript" },
    ],
    Frontend: [
      { icon: <Layout size={16} />, name: "React" },
      { icon: <Wind size={16} />, name: "Tailwind" },
    ],
    Backend: [
      { icon: <Server size={16} />, name: "Node.js" },
      { icon: <Server size={16} />, name: "Express.js" },
      { icon: <Server size={16} />, name: "REST APIs" },
    ],
    Database: [{ icon: <Database size={16} />, name: "MongoDB" }],
    DevOps: [
      { icon: <Settings size={16} />, name: "Nginx" },
      { icon: <Terminal size={16} />, name: "Linux" },
    ],
    "Version Control": [{ icon: <GithubIcon size={16} />, name: "Git" }],
  };

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-mocha-lavender">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="rounded-lg bg-mocha-base bg-opacity-50 p-4">
            <h3 className="mb-2 text-lg font-semibold text-mocha-mauve">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 rounded-md bg-mocha-surface-0 px-2.5 py-1 text-sm font-semibold text-mocha-text"
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
