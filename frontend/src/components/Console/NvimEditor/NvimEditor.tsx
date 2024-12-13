import Import from "./Import";
import Tag from "./Tag";

// NvimEditor.tsx
export default function () {
  return (
    <div className="flex h-full flex-col px-5">
      <p className="text-xl font-medium text-mocha-overlay-2">// Main.jsx</p>
      <Import name="About" />
      <Import name="Skills" />
      <Import name="Projects" />
      <Import name="Contact" />

      <br />

      <span className="flex flex-row gap-2 text-xl font-medium">
        <p className="text-mocha-mauve">const</p>
        <p className="text-mocha-blue">Main</p>
        <p className="text-mocha-teal">=</p>
        <p className="text-mocha-overlay-2">()</p>
        <p className="text-mocha-teal">{"=>"}</p>
        <p className="text-mocha-overlay-2">{"{"}</p>
      </span>

      {/* Inside Main Function */}
      <div className="ml-8 flex flex-row gap-2 text-xl font-medium">
        <p className="text-mocha-mauve">return</p>
        <p className="text-mocha-overlay-2">(</p>
      </div>

      {/* Inside Return Statement */}
      <div className="ml-16 flex flex-row gap-2 text-xl font-medium">
        <p className="text-mocha-teal">{"<main>"}</p>
      </div>

      {/* Inside Div */}
      <div className="ml-24">
        <Tag name="About" />
        <Tag name="Skills" />
        <Tag name="Projects" />
        <Tag name="Contact" />
      </div>

      <div className="ml-16 flex flex-row gap-2 text-xl font-medium">
        <p className="text-mocha-teal">{"</main>"}</p>
      </div>

      <p className="ml-8 text-mocha-overlay-2">)</p>

      <p className="text-mocha-overlay-2">{"}"}</p>

      <br />

      <span className="flex flex-row gap-2 text-xl font-medium">
        <p className="text-mocha-teal">export</p>
        <p className="text-mocha-mauve">default</p>
        <p className="text-mocha-blue">Main</p>
      </span>
    </div>
  );
}
