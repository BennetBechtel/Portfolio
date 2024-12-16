// ContactFile.tsx
import AnchorTag from "../Parts/AnchorTag";
import FunctionExport from "../Parts/FunctionExport";
import GenericTag from "../Parts/GenericTag";
import HeadingTag from "../Parts/HeadingTag";

export default function () {
  return (
    <div className="flex h-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Contact.jsx</p>

      <FunctionExport name="Contact">
        <div>
          <GenericTag type="section">
            <HeadingTag size={2} text="Contact" />
            <br />

            <GenericTag type="div">
              <HeadingTag size={3} text="Email: " />
              <AnchorTag href="mailto:bennet.bechtel007@gmail.com">
                <p className="text-md font-medium text-mocha-blue sm:text-xl">
                  bennet.bechtel007@gmail.com
                </p>
              </AnchorTag>
            </GenericTag>
            <br />

            <GenericTag type="div">
              <HeadingTag size={3} text="GitHub: " />
              <AnchorTag href="https://github.com/BennetBechtel">
                <p className="text-md font-medium text-mocha-blue sm:text-xl">BennetBechtel</p>
              </AnchorTag>
            </GenericTag>
          </GenericTag>
        </div>
      </FunctionExport>
    </div>
  );
}
