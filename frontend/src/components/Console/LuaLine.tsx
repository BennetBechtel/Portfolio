// LuaLine.tsx
import GitBranchIcon from "../../assets/GitBranchIcon";
import ReactLogo from "../../assets/react_logo.png";

export default function () {
  return (
    <div className="hidden w-full flex-row justify-between md:flex md:pl-[444px]">
      <span className="flex flex-row">
        <div className="h-full w-[11px] bg-mocha-crust"></div>

        <p className="flex h-full flex-row items-center bg-mocha-blue px-3 text-xl font-extrabold text-[1e1e2e]">
          NORMAL
        </p>

        <span className="flex h-full flex-row items-center gap-2 bg-mocha-surface-0 px-2">
          <GitBranchIcon />
          <p className="flex flex-row items-center text-lg font-medium text-mocha-mauve">main</p>
        </span>

        <p className="flex flex-row items-center px-2 text-lg font-medium text-mocha-text">
          Main.tsx
        </p>
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
