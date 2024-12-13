// Console.tsx
import BufferLine from "../components/Console/BufferLine/BufferLine";
import CommandLine from "../components/Console/CommandLine";
import KittyBar from "../components/Console/KittyBar";
import LuaLine from "../components/Console/LuaLine";
import NvimEditor from "../components/Console/NvimEditor/NvimEditor";
import NvimTree from "../components/Console/NvimTree/NvimTree";
import TmuxBar from "../components/Console/TmuxBar/TmuxBar";

export default function () {
  return (
    <div className="grid h-screen grid-rows-[auto_auto_auto_1fr_auto_auto] bg-mocha-base font-fira">
      <KittyBar />
      <TmuxBar />
      <BufferLine />
      <div className="grid h-full grid-cols-[auto_1fr]">
        <NvimTree />
        <NvimEditor />
      </div>
      <LuaLine />
      <CommandLine />
    </div>
  );
}
