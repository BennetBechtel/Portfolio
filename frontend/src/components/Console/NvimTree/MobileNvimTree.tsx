import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import FolderOpen from "../../../assets/folder_open.png";
import ReactLogo from "../../../assets/react_logo.png";
import File from "./File";
import Folder from "./Folder";

interface NvimTreeProps {
  setCurrentFile: Function;
  setPage: Function;
}

export default function ({ setCurrentFile, setPage }: NvimTreeProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-mocha-surface-0 p-3 text-mocha-text shadow-lg transition-transform hover:scale-105 focus:outline-none active:scale-95 min-[1000px]:hidden"
        aria-label="Open file explorer"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity min-[1000px]:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 transform overflow-y-auto bg-mocha-base p-4 shadow-xl transition-transform duration-300 ease-in-out min-[1000px]:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Tree Content */}
        <section className="flex h-full flex-col justify-between text-lg">
          <div className="space-y-1">
            <span className="flex items-center justify-between">
              <Folder image={FolderOpen} name="~/Bennet/Portfolio" root={true} />

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-mocha-text hover:bg-mocha-surface-0"
                aria-label="Close file explorer"
              >
                <X size={20} />
              </button>
            </span>

            <div className="ml-4 space-y-3">
              <div className="ml-4 space-y-2 border-l-2 border-mocha-surface-2 pl-4">
                <File
                  image={ReactLogo}
                  name="About.jsx"
                  onClick={() => {
                    setCurrentFile("About");
                    setIsOpen(false);
                  }}
                />
                <File
                  image={ReactLogo}
                  name="Contact.jsx"
                  onClick={() => {
                    setCurrentFile("Contact");
                    setIsOpen(false);
                  }}
                />
                <File
                  image={ReactLogo}
                  name="Projects.jsx"
                  onClick={() => {
                    setCurrentFile("Projects");
                    setIsOpen(false);
                  }}
                />
                <File
                  image={ReactLogo}
                  name="Skills.jsx"
                  onClick={() => {
                    setCurrentFile("Skills");
                    setIsOpen(false);
                  }}
                />
              </div>

              <File
                image={ReactLogo}
                name="Main.jsx"
                onClick={() => {
                  setCurrentFile("Main");
                  setIsOpen(false);
                }}
              />
            </div>
          </div>

          <div
            onClick={() => setPage("Browser")}
            className="mx-auto mb-5 w-fit cursor-pointer text-lg font-semibold text-mocha-pink"
          >
            Switch to Browser View
          </div>
        </section>
      </div>
    </>
  );
}
