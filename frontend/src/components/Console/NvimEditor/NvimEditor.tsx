// NvimEditor.tsx
import MainFile from "./Files/MainFile";
import AboutFile from "./Files/AboutFile";
import ContactFile from "./Files/ContactFile";
import ProjectsFile from "./Files/ProjectsFile";
import SkillsFile from "./Files/SkillsFile";

interface NvimEditorProps {
  currentFile: string;
  setCurrentFile: Function;
}

export default function ({ currentFile, setCurrentFile }: NvimEditorProps) {
  const Content = () => {
    switch (currentFile) {
      case "About":
        return <AboutFile />;
      case "Contact":
        return <ContactFile />;
      case "Projects":
        return <ProjectsFile />;
      case "Skills":
        return <SkillsFile />;
      default:
        return <MainFile setCurrentFile={setCurrentFile} />;
    }
  };

  return (
    <div className="pb-16 min-[1050px]:pb-0">
      <Content />
    </div>
  );
}
