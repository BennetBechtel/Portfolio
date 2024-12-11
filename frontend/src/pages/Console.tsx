// Console.tsx
import BufferLine from "../components/Console/BufferLine/BufferLine"
import CommandLine from "../components/Console/CommandLine"
import KittyBar from "../components/Console/KittyBar"
import LuaLine from "../components/Console/LuaLine"
import NvimEditor from "../components/Console/NvimEditor/NvimEditor"
import NvimTree from "../components/Console/NvimTree/NvimTree"
import TmuxBar from "../components/Console/TmuxBar/TmuxBar"

export default function() {
    return (
        <div className="h-screen font-fira grid grid-rows-[auto_auto_auto_1fr_auto_auto] bg-[#1e1e2e]">
            <KittyBar />
            <TmuxBar />
            <BufferLine />
            <div className="h-full grid grid-cols-[auto_1fr]">
                <NvimTree />
                <NvimEditor />
            </div>
            <LuaLine />
            <CommandLine />
        </div>
    )
}
