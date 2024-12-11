// BufferLine.tsx
import Buffer from "./Buffer.tsx"
import ReactLogo from "../../../assets/react_logo.png"

export default function() {
    return (
        <div className="h-7 px-12 flex flex-row gap-6">
            <Buffer image={ReactLogo} name="Main.tsx" />
            <Buffer image={ReactLogo} name="About.tsx" />
            <Buffer image={ReactLogo} name="Skills.tsx" />
            <Buffer image={ReactLogo} name="Projects.tsx" />
            <Buffer image={ReactLogo} name="Contact.tsx" />
        </div>
    )
}
