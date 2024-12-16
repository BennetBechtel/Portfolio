// LuaLine.tsx
import GitBranchIcon from "../../assets/GitBranchIcon";
import ReactLogo from "../../assets/react_logo.png";

interface LuaLineProps {
  currentFile: string;
}

export default function ({ currentFile }: LuaLineProps) {
  return (
    <div className="hidden w-full flex-row justify-between md:flex md:pl-[319px]">
      <span className="flex flex-row">
        <div className="h-full w-[11px] bg-mocha-crust"></div>

        <p className="flex h-full flex-row items-center bg-mocha-blue px-3 text-xl font-extrabold text-[1e1e2e]">
          NORMAL
        </p>

        <a
          href="https://github.com/BennetBechtel/Portfolio.git"
          className="flex h-full flex-row items-center gap-2 bg-mocha-surface-0 px-2"
        >
          <GitBranchIcon />
          <p className="flex flex-row items-center text-lg font-medium text-mocha-mauve">main</p>
        </a>

        <p className="px-2 align-middle text-lg font-medium text-mocha-text">{currentFile}.tsx</p>
      </span>

      <span className="flex flex-row">
        <p className="hidden flex-row items-center px-2 text-lg font-medium text-mocha-teal xl:flex">
          utf-8
        </p>

        <span className="hidden flex-row items-center gap-1 px-2 xl:flex">
          <img src={ReactLogo} alt="" className="h-4" />
          <p className="text-lg font-medium text-mocha-green">typescriptreact</p>
        </span>

        <div className="h-full w-[55px] bg-mocha-blue"></div>
      </span>
    </div>
  );
}
