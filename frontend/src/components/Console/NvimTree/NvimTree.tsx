// NvimTree.tsx
import FolderOpen from "../../../assets/folder_open.png"
import FolderClose from "../../../assets/folder_close.png"
import ReactLogo from "../../../assets/react_logo.png"
import Element from "./Element"

export default function() {
    return (
        <div className="h-full w-[450px] border-r-2 border-[#585B70] pl-3">
            <span className="flex flex-row gap-1 items-center">
                <img src={FolderOpen} alt="" className="h-4" />
                <p className="text-[#89b4fa] font-bold text-xl">~/Bennet/Portfolio</p>
            </span>

            {/* Root Folder */}
            <div className="ml-5">
                <Element image={FolderOpen} name="src" />

                {/* src Folder */}
                <div className="border-l-2 border-[#585B70] ml-7 pl-3">
                    <Element image={ReactLogo} name="About.jsx" />
                    <Element image={ReactLogo} name="Contact.jsx" />
                    <Element image={ReactLogo} name="Projects.jsx" />
                    <Element image={ReactLogo} name="Skills.jsx" />
                </div>

                <Element image={ReactLogo} name="Main.jsx" />
            </div>

        </div>
    )
}
