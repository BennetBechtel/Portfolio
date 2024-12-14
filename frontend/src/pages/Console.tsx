// Console.tsx
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import BufferLine from "../components/Console/BufferLine/BufferLine";
import CommandLine from "../components/Console/CommandLine";
import KittyBar from "../components/Console/KittyBar";
import LuaLine from "../components/Console/LuaLine";
import NvimEditor from "../components/Console/NvimEditor/NvimEditor";
import NvimTree from "../components/Console/NvimTree/NvimTree";
import TmuxBar from "../components/Console/TmuxBar/TmuxBar";

const ConsoleLayout = () => {
  const [isTreeVisible, setIsTreeVisible] = useState(() => window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsTreeVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="grid min-h-svh grid-rows-[auto_auto_1fr_auto_auto] bg-mocha-base font-fira">
        <KittyBar />
        <div className="hidden min-[1000px]:block">
          <TmuxBar />
        </div>

        <div className="relative grid h-full grid-cols-1 min-[1000px]:grid-cols-[450px_1fr]">
          {/* NvimTree with fixed width */}
          <div
            className={`fixed left-0 top-6 z-40 h-full w-[450px] transform bg-mocha-base transition-transform duration-300 ease-in-out min-[1000px]:relative min-[1000px]:block ${isTreeVisible ? "translate-x-0" : "-translate-x-full min-[1000px]:translate-x-0"} ${!isTreeVisible ? "min-[1000px]:hidden" : ""} `}
          >
            <NvimTree />
          </div>

          {/* Overlay when tree is visible on mobile */}
          {isTreeVisible && (
            <div
              className="fixed inset-0 z-30 bg-black bg-opacity-50 min-[1000px]:hidden"
              onClick={() => setIsTreeVisible(false)}
            />
          )}

          {/* Editor */}
          <div className="w-full overflow-x-auto">
            <NvimEditor />
          </div>
        </div>

        <div className="hidden min-[1000px]:block">
          <LuaLine />
        </div>
        <div className="hidden min-[1000px]:block">
          <CommandLine />
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsTreeVisible(!isTreeVisible)}
        className="fixed bottom-4 left-4 z-50 rounded-md bg-mocha-surface-0 p-2 text-mocha-text min-[1000px]:hidden"
      >
        <Menu size={24} />
      </button>
    </>
  );
};

export default ConsoleLayout;
