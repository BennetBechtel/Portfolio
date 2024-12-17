// ProjectsConst.tsx
export default function () {
  return (
    <>
      {/* Const */}
      <div className="text-md pl-8 font-medium sm:text-xl">
        <span className="flex flex-row gap-2">
          <p className="text-mocha-mauve">const</p>
          <p className="text-mocha-text">projects</p>
          <p className="text-mocha-teal">=</p>
          <p className="text-mocha-subtext-0">[</p>
        </span>

        <div className="pl-8">
          <p className="text-mocha-subtext-0">{"{"}</p>
          {/* Name */}
          <div className="pl-8">
            <div className="flex flex-row">
              <p className="text-mocha-lavender">name</p>
              <p className="text-mocha-subtext-0">:</p>
              <p className="pl-2 text-mocha-green">"FieldFinder"</p>
              <p className="text-mocha-subtext-0">,</p>
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <span className="flex flex-row">
                <p className="text-mocha-lavender">description</p>
                <p className="text-mocha-subtext-0">:</p>
              </span>
              <p className="pl-8 text-mocha-green">
                "A web application addressing the challenge of sports facility booking in Germany.
                The platform enables sports clubs and individuals to efficiently book halls and
                manage facility utilization, streamlining the often complex booking process."
                <span className="text-mocha-subtext-0">,</span>
              </p>
            </div>

            {/* Tech */}
            <div>
              <div className="flex flex-col">
                <section className="flex flex-row">
                  <p className="text-mocha-lavender">tech</p>
                  <p className="text-mocha-subtext-0">:</p>
                  <p className="pl-2 text-mocha-subtext-0">[</p>
                </section>

                <section className="flex flex-col pl-8">
                  <span className="flex flex-row">
                    <p className="pl-2 text-mocha-green">"React"</p>
                    <p className="text-mocha-subtext-0">,</p>
                  </span>
                  <span className="flex flex-row">
                    <p className="pl-2 text-mocha-green">"Node.js"</p>
                    <p className="text-mocha-subtext-0">,</p>
                  </span>
                  <span className="flex flex-row">
                    <p className="pl-2 text-mocha-green">"Express.js"</p>
                    <p className="text-mocha-subtext-0">,</p>
                  </span>
                  <span className="flex flex-row">
                    <p className="pl-2 text-mocha-green">"MongoDB"</p>
                    <p className="text-mocha-subtext-0">,</p>
                  </span>
                  <span className="flex flex-row">
                    <p className="pl-2 text-mocha-green">"PayPal API"</p>
                    <p className="text-mocha-subtext-0">,</p>
                  </span>
                </section>

                <p className="text-mocha-subtext-0">
                  ]<span className="text-mocha-subtext-0">,</span>
                </p>
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col">
              <span className="flex flex-row">
                <p className="text-mocha-lavender">preview</p>
                <p className="text-mocha-subtext-0">:</p>
              </span>
              <p className="pl-8 text-mocha-green">
                "https://fieldfinder.bechtel-code.de"
                <span className="text-mocha-subtext-0">,</span>
              </p>
            </div>

            {/* GitHub */}
            <div className="flex flex-col">
              <span className="flex flex-row">
                <p className="text-mocha-lavender">github</p>
                <p className="text-mocha-subtext-0">:</p>
              </span>
              <p className="pl-8 text-mocha-green">
                <span className="mr-[-12px]">"https://github.com/BennetBechtel/ </span>
                <span>FieldFinder.git"</span>
                <span className="text-mocha-subtext-0">,</span>
              </p>
            </div>
          </div>

          <p className="text-mocha-subtext-0">{"}"}</p>
        </div>
        <p className="text-mocha-subtext-0">]</p>
      </div>
      <br />
    </>
  );
}
