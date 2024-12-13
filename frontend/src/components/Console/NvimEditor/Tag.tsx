// Tag.tsx
interface TagProps {
  name: string;
}

export default function ({ name }: TagProps) {
  return (
    <span className="flex flex-row text-xl font-medium">
      <p className="text-mocha-teal">{"<"}</p>
      <p className="text-mocha-mauve">{name}</p>
      <p className="text-mocha-teal">{"/>"}</p>
    </span>
  );
}
