// SkillsFile.tsx
import FunctionExportWithConst from "../Parts/FunctionExportWithConst";
import GenericTag from "../Parts/GenericTag";
import HeadingTag from "../Parts/HeadingTag";
import MapStatement from "../Parts/MapStatement";
import MapStatementTwoVars from "../Parts/MapStatementTwoVars";
import SkillsConst from "../Parts/SkillsConst";

export default function () {
  return (
    <div className="flex h-full w-fit min-w-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Skills.jsx</p>

      <FunctionExportWithConst name="Skills" ConstElement={SkillsConst}>
        <GenericTag type="section">
          <HeadingTag size={2} text="Skills" />
          <MapStatementTwoVars nameLong="skills" var1="category" var2="skills" nameKey="category">
            <GenericTag type="h3" inline={true}>
              <span className="text-md flex w-fit flex-row font-medium sm:text-xl">
                <p className="text-mocha-subtext-0">{"{"}</p>
                <p className="text-mocha-red">category</p>
                <p className="text-mocha-subtext-0">{"}"}</p>
              </span>
            </GenericTag>

            <MapStatement nameLong="skills" nameShort="skill">
              <span className="text-md flex flex-row font-medium sm:text-xl">
                <p className="text-mocha-subtext-0">{"{"}</p>
                <p className="text-mocha-red">skill</p>
                <p className="text-mocha-subtext-0">{"}"}</p>
              </span>
            </MapStatement>
          </MapStatementTwoVars>
        </GenericTag>
      </FunctionExportWithConst>
    </div>
  );
}
