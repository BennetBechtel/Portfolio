// PageTag.tsx
interface PageTagProps {
  name: string;
}

export default function ({ name }: PageTagProps) {
  return (
    <span className="text-md flex flex-row font-medium sm:text-xl">
      <p className="text-mocha-teal">{"<"}</p>
      <p className="text-mocha-mauve">{name}</p>
      <p className="pl-2 text-mocha-teal">{"/>"}</p>
    </span>
  );
}
