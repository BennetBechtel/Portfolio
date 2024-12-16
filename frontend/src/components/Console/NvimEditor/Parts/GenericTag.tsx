// GenericTag.tsx
interface GenericTagProps {
  type: string;
  children?: React.ReactNode;
}

export default function ({ type, children }: GenericTagProps) {
  return (
    <div>
      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"<"}</p>
        <p className="text-mocha-pink">{type}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>

      <div className="pl-8">{children}</div>

      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"</"}</p>
        <p className="text-mocha-pink">{type}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>
    </div>
  );
}
