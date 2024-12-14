import Import from "./Import";
import Tag from "./Tag";

// NvimEditor.tsx
export default function () {
  return (
    <div className="flex h-full flex-col p-3">
      <p className="text-md font-medium text-mocha-overlay-2 sm:text-xl">// Main.jsx</p>
      <Import name="About" />
      <Import name="Skills" />
      <Import name="Projects" />
      <Import name="Contact" />

      <br />

      <span className="text-md flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-mauve">const</p>
        <p className="text-mocha-blue">Main</p>
        <p className="text-mocha-teal">=</p>
        <p className="text-mocha-overlay-2">()</p>
        <p className="text-mocha-teal">{"=>"}</p>
        <p className="text-mocha-overlay-2">{"{"}</p>
      </span>

      {/* Inside Main Function */}
      <div className="text-md ml-8 flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-mauve">return</p>
        <p className="text-mocha-overlay-2">(</p>
      </div>

      {/* Inside Return Statement */}
      <div className="text-md ml-16 flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-teal">{"<main>"}</p>
      </div>

      {/* Inside Div */}
      <div className="ml-24">
        <Tag name="About" />
        <Tag name="Skills" />
        <Tag name="Projects" />
        <Tag name="Contact" />
      </div>

      <div className="text-md ml-16 flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-teal">{"</main>"}</p>
      </div>

      <p className="text-md ml-8 text-mocha-overlay-2 sm:text-xl">)</p>

      <p className="text-md text-mocha-overlay-2 sm:text-xl">{"}"}</p>

      <br />

      <span className="text-md flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-teal">export</p>
        <p className="text-mocha-mauve">default</p>
        <p className="text-mocha-blue">Main</p>
      </span>
    </div>
  );
}
