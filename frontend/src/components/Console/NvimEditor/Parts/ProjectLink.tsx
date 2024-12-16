// ProjectLink.tsx
interface ProjectLinkProps {
  name: string;
  nameKey: string;
  text: string;
}

export default function ({ name, nameKey, text }: ProjectLinkProps) {
  return (
    <div className="text-md flex flex-col font-medium sm:text-xl">
      <section className="flex flex-row">
        <p className="text-mocha-subtext-0">{"{"}</p>
        <p className="text-mocha-red">{name}</p>
        <p className="text-mocha-subtext-0">.</p>
        <p className="text-mocha-lavender">{nameKey}</p>

        <p className="px-2 text-mocha-teal">&&</p>
      </section>

      <section className="flex flex-col pl-8">
        <span className="flex flex-row">
          <p className="text-mocha-teal">{"<"}</p>
          <p className="text-mocha-pink">a</p>

          <p className="pl-2 text-mocha-teal">href=</p>
          <p className="text-mocha-subtext-0">{"{"}</p>
          <p className="text-mocha-red">{name}</p>
          <p className="text-mocha-subtext-0">.</p>
          <p className="text-mocha-lavender">{nameKey}</p>

          <p className="text-mocha-teal">{">"}</p>
        </span>

        <p className="whitespace-nowrap pl-8 text-mocha-teal">{text}</p>

        <span className="flex flex-row">
          <p className="text-mocha-teal">{"</"}</p>
          <p className="text-mocha-pink">a</p>
          <p className="text-mocha-teal">{">"}</p>

          <p className="text-mocha-subtext-0">{"}"}</p>
        </span>
      </section>
    </div>
  );
}
