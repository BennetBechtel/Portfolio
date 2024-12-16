// GenericTag.tsx
interface GenericTagProps {
  type: string;
  inline?: boolean;
  children?: React.ReactNode;
}

export default function ({ type, inline, children }: GenericTagProps) {
  return (
    <div className={`${inline && "flex flex-row"}`}>
      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"<"}</p>
        <p className="text-mocha-pink">{type}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>

      <div className={`${!inline && "pl-8"}`}>{children}</div>

      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"</"}</p>
        <p className="text-mocha-pink">{type}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>
    </div>
  );
}
