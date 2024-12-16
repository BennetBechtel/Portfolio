// NvimTree.tsx
import FolderOpen from "../../../assets/folder_open.png";
import ReactLogo from "../../../assets/react_logo.png";
import File from "./File";
import Folder from "./Folder";

interface NvimTreeProps {
  setCurrentFile: Function;
  setPage: Function;
}

export default function ({ setCurrentFile, setPage }: NvimTreeProps) {
  return (
    <section className="flex h-full w-full flex-col justify-between border-r-2 border-mocha-surface-2">
      <div className="h-fit w-fit pl-3">
        <Folder image={FolderOpen} name="~/Bennet/Portfolio" root={true} />

        {/* Inside Root Folder */}
        <div className="ml-5">
          <Folder image={FolderOpen} name="src" />

          {/* Inside src Folder */}
          <div className="ml-7 border-l-2 border-mocha-surface-2 pl-3">
            <File image={ReactLogo} name="About.jsx" onClick={() => setCurrentFile("About")} />
            <File image={ReactLogo} name="Contact.jsx" onClick={() => setCurrentFile("Contact")} />
            <File
              image={ReactLogo}
              name="Projects.jsx"
              onClick={() => setCurrentFile("Projects")}
            />
            <File image={ReactLogo} name="Skills.jsx" onClick={() => setCurrentFile("Skills")} />
          </div>

          <File image={ReactLogo} name="Main.jsx" onClick={() => setCurrentFile("Main")} />
        </div>
      </div>

      <div
        onClick={() => setPage("Browser")}
        className="mx-auto mb-3 w-fit cursor-pointer text-lg font-semibold text-mocha-pink"
      >
        Switch to Browser View
      </div>
    </section>
  );
}
