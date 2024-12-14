// BufferLine.tsx
import Buffer from "./Buffer.tsx";
import ReactLogo from "../../../assets/react_logo.png";

export default function () {
  return (
    <div className="flex h-7 w-full overflow-x-auto whitespace-nowrap px-4 md:px-12">
      <Buffer image={ReactLogo} name="Main.tsx" />
      <Buffer image={ReactLogo} name="About.tsx" />
      <Buffer image={ReactLogo} name="Skills.tsx" />
      <Buffer image={ReactLogo} name="Projects.tsx" />
      <Buffer image={ReactLogo} name="Contact.tsx" />
    </div>
  );
}
