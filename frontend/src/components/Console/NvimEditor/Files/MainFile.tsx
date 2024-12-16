// MainFile.tsx
import FunctionExport from "../Parts/FunctionExport";
import GenericTag from "../Parts/GenericTag";
import Import from "../Parts/Import";
import PageTag from "../Parts/PageTag";

interface MainFileProps {
  setCurrentFile: Function;
}

export default function ({ setCurrentFile }: MainFileProps) {
  return (
    <div className="flex h-full w-fit min-w-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Main.jsx</p>
      <Import name="About" />
      <Import name="Skills" />
      <Import name="Projects" />
      <Import name="Contact" />

      <br />

      <FunctionExport name="Main">
        <div>
          <GenericTag type="main">
            <PageTag name="About" onClick={() => setCurrentFile("About")} />
            <PageTag name="Skills" onClick={() => setCurrentFile("Skills")} />
            <PageTag name="Projects" onClick={() => setCurrentFile("Projects")} />
            <PageTag name="Contact" onClick={() => setCurrentFile("Contact")} />
          </GenericTag>
        </div>
      </FunctionExport>
    </div>
  );
}
