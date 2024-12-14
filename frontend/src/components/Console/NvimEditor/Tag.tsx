// Tag.tsx
interface TagProps {
  name: string;
}

export default function ({ name }: TagProps) {
  return (
    <span className="flex flex-row text-sm font-medium sm:text-xl">
      <p className="text-mocha-teal">{"<"}</p>
      <p className="text-mocha-mauve">{name}</p>
      <p className="text-mocha-teal">{"/>"}</p>
    </span>
  );
}
