// ProjectsFile.tsx
import FunctionExport from "../Parts/FunctionExport";
import GenericTag from "../Parts/GenericTag";

export default function () {
  return (
    <div className="flex h-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Projects.jsx</p>

      <FunctionExport name="Projects">
        <div>
          <GenericTag type="section"></GenericTag>
        </div>
      </FunctionExport>
    </div>
  );
}
