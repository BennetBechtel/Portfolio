// AnchorTag.tsx
interface AnchorTagProps {
  href: string;
  children?: React.ReactNode;
}

export default function ({ href, children }: AnchorTagProps) {
  return (
    <div>
      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"<"}</p>
        <p className="text-mocha-pink">a</p>

        <p className="pl-2 text-mocha-teal">href=</p>
        <p className="text-mocha-green">"</p>
        <p className="text-mocha-flamingo">{href}</p>
        <p className="text-mocha-green">"</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>

      <div className="pl-8">{children}</div>

      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"</"}</p>
        <p className="text-mocha-pink">a</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>
    </div>
  );
}
