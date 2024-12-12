// LuaLine.tsx
import GitBranchIcon from "../../assets/GitBranchIcon";
import ReactLogo from "../../assets/react_logo.png"

export default function() {
    return (
        <div className="pl-[444px] h-6 w-full flex flex-row justify-between">
            <span className="flex flex-row">
                <div className="w-[11px] h-full bg-mocha-crust"></div>

                <p className="h-full bg-mocha-blue text-[1e1e2e] font-extrabold text-xl flex flex-row items-center px-3">NORMAL</p>

                <span className="h-full flex flex-row gap-2 px-2 bg-mocha-surface-0">
                    <GitBranchIcon />
                    <p className="text-mocha-mauve text-lg font-medium flex flex-row items-center">main</p>
                </span>

                <p className="text-mocha-text font-medium text-lg px-2 flex-row flex items-center">Main.tsx</p>
            </span>

            <span className="flex flex-row">
                <p className="text-mocha-teal font-medium text-lg px-2 flex-row flex items-center">utf-8</p>

                <span className="px-2 flex-row flex gap-1 items-center">
                    <img src={ReactLogo} alt="" className="h-4" />
                    <p className="text-mocha-green font-medium text-lg">typescriptreact</p>
                </span>

                <div className="h-full bg-mocha-blue w-[55px]"></div>
            </span>
        </div>
    )
}
