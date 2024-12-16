// MainFile.tsx
import FunctionExport from "../Parts/FunctionExport";
import GenericTag from "../Parts/GenericTag";
import Import from "../Parts/Import";
import PageTag from "../Parts/PageTag";

export default function () {
  return (
    <div className="flex h-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Main.jsx</p>
      <Import name="About" />
      <Import name="Skills" />
      <Import name="Projects" />
      <Import name="Contact" />

      <br />

      <FunctionExport name="Main">
        <div>
          <GenericTag type="main">
            <PageTag name="About" />
            <PageTag name="Skills" />
            <PageTag name="Projects" />
            <PageTag name="Contact" />
          </GenericTag>
        </div>
      </FunctionExport>
    </div>
  );
}
