// NvimTree.tsx
import FolderOpen from "../../../assets/folder_open.png"
import ReactLogo from "../../../assets/react_logo.png"
import File from "./File"
import Folder from "./Folder"

export default function() {
    return (
        <div className="h-full w-[450px] border-r-2 border-mocha-surface-2 pl-3">
            <Folder image={FolderOpen} name="~/Bennet/Portfolio" root={true} />

            {/* Inside Root Folder */}
            <div className="ml-5">
                <Folder image={FolderOpen} name="src" />

                {/* Inside src Folder */}
                <div className="border-l-2 border-mocha-surface-2 ml-7 pl-3">
                    <File image={ReactLogo} name="About.jsx" />
                    <File image={ReactLogo} name="Contact.jsx" />
                    <File image={ReactLogo} name="Projects.jsx" />
                    <File image={ReactLogo} name="Skills.jsx" />
                </div>

                <File image={ReactLogo} name="Main.jsx" />
            </div>

        </div>
    )
}
