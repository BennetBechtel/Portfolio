// Console.tsx
import { useState } from "react";
import CommandLine from "../components/Console/CommandLine";
import KittyBar from "../components/Console/KittyBar";
import LuaLine from "../components/Console/LuaLine";
import NvimEditor from "../components/Console/NvimEditor/NvimEditor";
import NvimTree from "../components/Console/NvimTree/NvimTree";
import MobileNvimTree from "../components/Console/NvimTree/MobileNvimTree";
import TmuxBar from "../components/Console/TmuxBar/TmuxBar";

interface ConsoleProps {
  setPage: Function;
}

export default function ({ setPage }: ConsoleProps) {
  const [currentFile, setCurrentFile] = useState("Main");

  return (
    <div className="h-dvh">
      <div className="grid h-full grid-rows-[auto_auto_1fr_auto_auto] bg-mocha-base font-fira">
        <KittyBar />
        <div className="hidden min-[1050px]:block">
          <TmuxBar />
        </div>

        <div className="relative grid h-full grid-cols-1 overflow-hidden min-[1050px]:grid-cols-[325px_1fr]">
          {/* Desktop NvimTree */}
          <div className="hidden min-[1050px]:block">
            <NvimTree setCurrentFile={setCurrentFile} setPage={setPage} />
          </div>

          {/* Editor */}
          <div className="custom-scrollbar h-full overflow-auto">
            <NvimEditor currentFile={currentFile} setCurrentFile={setCurrentFile} />
          </div>
        </div>

        <div className="hidden min-[1050px]:block">
          <LuaLine currentFile={currentFile} />
        </div>
        <div className="hidden min-[1050px]:block">
          <CommandLine />
        </div>
      </div>

      {/* Mobile NvimTree */}
      <MobileNvimTree setCurrentFile={setCurrentFile} setPage={setPage} />
    </div>
  );
}
