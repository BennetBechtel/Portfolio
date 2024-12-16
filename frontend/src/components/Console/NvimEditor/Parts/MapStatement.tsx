// MapStatement.tsx
interface MapStatementProps {
  nameLong: string;
  nameShort: string;
  nameKey?: string;
  inlineDiv?: boolean;
  children?: React.ReactNode;
}

export default function ({ nameLong, nameShort, nameKey, inlineDiv, children }: MapStatementProps) {
  return (
    <div>
      <section className="text-md flex flex-row gap-2 font-medium sm:text-xl">
        <span className="flex flex-row">
          <p className="text-mocha-subtext-0">{"{"}</p>
          <p className="text-mocha-text">{nameLong}</p>
        </span>
        <p className="text-mocha-blue">map</p>
        <span className="flex flex-row">
          <p className="text-mocha-subtext-0">((</p>
          <p className="text-mocha-red">{nameShort}</p>
          <p className="text-mocha-subtext-0">)</p>
        </span>
        <p className="text-mocha-teal">{"=>"}</p>
        <p className="text-mocha-subtext-0">(</p>
      </section>

      <section className={`pl-8 ${inlineDiv && "flex flex-row"}`}>
        <span className="text-md flex flex-row font-medium sm:text-xl">
          <p className="text-mocha-teal">{"<"}</p>
          <p className="text-mocha-pink">div</p>
          <p className="pl-2 text-mocha-teal">key=</p>
          <p className="text-mocha-subtext-0">{"{"}</p>

          <p className="text-mocha-red">{nameShort}</p>
          {nameKey && (
            <>
              <p className="text-mocha-subtext-0">.</p>
              <p className="text-mocha-lavender">{nameKey}</p>
            </>
          )}

          <p className="text-mocha-subtext-0">{"}"}</p>
          <p className="text-mocha-teal">{">"}</p>
        </span>

        <div className={`${!inlineDiv && "pl-8"}`}>{children}</div>

        <span className="text-md flex flex-row font-medium sm:text-xl">
          <p className="text-mocha-teal">{"</"}</p>
          <p className="text-mocha-pink">div</p>
          <p className="text-mocha-teal">{">"}</p>
        </span>
      </section>

      <p className="text-md font-medium text-mocha-subtext-0 sm:text-xl">{"))}"}</p>
    </div>
  );
}
