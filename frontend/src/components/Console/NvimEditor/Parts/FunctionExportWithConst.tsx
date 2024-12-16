// FunctionExport.tsx
interface FunctionExportWithConstProps {
  name: string;
  ConstElement: React.ComponentType;
  children?: React.ReactNode;
}

export default function ({ name, children, ConstElement }: FunctionExportWithConstProps) {
  return (
    <div>
      <div className="text-md flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-mauve">const</p>
        <p className="text-mocha-blue">{name}</p>
        <p className="text-mocha-teal">=</p>
        <p className="text-mocha-overlay-2">()</p>
        <p className="text-mocha-teal">{"=>"}</p>
        <p className="text-mocha-overlay-2">{"{"}</p>
      </div>

      <ConstElement />

      <div className="text-md ml-8 flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-mauve">return</p>
        <p className="text-mocha-overlay-2">(</p>
      </div>

      <div className="ml-16">{children}</div>

      <p className="text-md ml-8 text-mocha-overlay-2 sm:text-xl">)</p>

      <p className="text-md text-mocha-overlay-2 sm:text-xl">{"}"}</p>

      <br />

      <span className="text-md flex flex-row gap-2 font-medium sm:text-xl">
        <p className="text-mocha-teal">export</p>
        <p className="text-mocha-mauve">default</p>
        <p className="text-mocha-blue">{name}</p>
      </span>
    </div>
  );
}
