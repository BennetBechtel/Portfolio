// AboutFile.tsx
import AnchorTag from "../Parts/AnchorTag";
import FunctionExport from "../Parts/FunctionExport";
import GenericTag from "../Parts/GenericTag";
import HeadingTag from "../Parts/HeadingTag";
import PageTag from "../Parts/PageTag";

export default function () {
  return (
    <div className="flex h-full w-fit min-w-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// About.jsx</p>

      <FunctionExport name="About">
        <div>
          <GenericTag type="header">
            <HeadingTag size={1} text="Bennet Bechtel" />
            <HeadingTag size={2} text="Full Stack Javascript Developer" />
            <HeadingTag size={3} text="Kiel, Germany" />
            <br />

            <AnchorTag href="https://github.com/BennetBechtel">
              <PageTag name="GitHubIcon" />
            </AnchorTag>

            <AnchorTag href="mailto:bennet.bechtel007@gmail.com">
              <PageTag name="MailIcon" />
            </AnchorTag>
            <br />

            <GenericTag type="p">
              <p className="text-md font-medium text-mocha-text sm:text-xl">
                Full-stack developer focused on building real-world solutions that matter. I
                specialize in creating web applications that combine robust backend architecture
                with polished, functional frontend interfaces.
              </p>
            </GenericTag>
          </GenericTag>
        </div>
      </FunctionExport>
    </div>
  );
}
