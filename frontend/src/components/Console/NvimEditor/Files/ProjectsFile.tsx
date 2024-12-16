// ProjectsFile.tsx
import FunctionExportWithConst from "../Parts/FunctionExportWithConst";
import GenericTag from "../Parts/GenericTag";
import HeadingTag from "../Parts/HeadingTag";
import ProjectsConst from "../Parts/ProjectsConst";
import MapStatement from "../Parts/MapStatement";
import ProjectLink from "../Parts/ProjectLink";

export default function () {
  return (
    <div className="flex h-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Projects.jsx</p>

      <FunctionExportWithConst name="Projects" ConstElement={ProjectsConst}>
        <GenericTag type="section">
          <HeadingTag size={2} text="Projects" />
          <br />
          <MapStatement nameLong="projects" nameShort="project" nameKey="name">
            {/* Project Map Heading */}
            <GenericTag type="h3" inline={true}>
              <span className="text-md flex flex-row font-medium sm:text-xl">
                <p className="text-mocha-subtext-0">{"{"}</p>
                <p className="text-mocha-red">project</p>
                <p className="text-mocha-subtext-0">.</p>
                <p className="text-mocha-lavender">name</p>
                <p className="text-mocha-subtext-0">{"}"}</p>
              </span>
            </GenericTag>

            {/* Project Map Description */}
            <GenericTag type="p" inline={true}>
              <span className="text-md flex flex-row font-medium sm:text-xl">
                <p className="text-mocha-subtext-0">{"{"}</p>
                <p className="text-mocha-red">project</p>
                <p className="text-mocha-subtext-0">.</p>
                <p className="text-mocha-lavender">description</p>
                <p className="text-mocha-subtext-0">{"}"}</p>
              </span>
            </GenericTag>

            <br />

            {/* Project Tech Map */}
            <MapStatement nameLong="tech" nameShort="tech" inlineDiv={true}>
              <span className="text-md flex flex-row font-medium sm:text-xl">
                <p className="text-mocha-subtext-0">{"{"}</p>
                <p className="text-mocha-red">tech</p>
                <p className="text-mocha-subtext-0">{"}"}</p>
              </span>
            </MapStatement>

            <br />

            <ProjectLink name="project" nameKey="github" text="View Code" />
            <br />
            <ProjectLink name="project" nameKey="preview" text="Visit Site" />
          </MapStatement>
        </GenericTag>
      </FunctionExportWithConst>
    </div>
  );
}
