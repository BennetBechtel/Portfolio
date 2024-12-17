// Projects.tsx
import { GithubIcon, ExternalLink } from "lucide-react";

export default function () {
  const projects = [
    {
      name: "FieldFinder",
      description:
        "A web application addressing the challenge of sports facility booking in Germany. The platform enables sports clubs and individuals to efficiently book halls and manage facility utilization, streamlining the often complex booking process.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "PayPal API"],
      preview: "https://fieldfinder.bechtel-code.de",
      github: "https://github.com/BennetBechtel/FieldFinder",
    },
  ];

  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-mocha-lavender">Projects</h2>

      {projects.map((project) => (
        <div key={project.name} className="rounded-lg bg-mocha-base p-8">
          <h3 className="mb-4 text-2xl font-bold text-mocha-mauve">{project.name}</h3>
          <p className="mb-6 text-lg leading-relaxed text-mocha-text">{project.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-mocha-surface-0 px-3 py-1.5 text-sm font-semibold text-mocha-lavender"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-2 font-semibold text-mocha-text transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={20} />
                View Code
              </a>
            )}

            {project.preview && (
              <a
                href={project.preview}
                className="flex items-center gap-2 font-semibold text-mocha-text transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                Visit Site
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
