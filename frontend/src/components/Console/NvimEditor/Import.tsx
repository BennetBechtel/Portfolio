// Import.tsx
interface ImportProps {
  name: string;
}

export default function ({ name }: ImportProps) {
  return (
    <span className="text-md flex flex-row gap-2 font-medium sm:text-xl">
      <p className="text-mocha-teal">import</p>
      <p className="text-mocha-yellow">{name}</p>
      <p className="text-mocha-mauve">from</p>
      <p className="text-mocha-green">"./src/{name}"</p>
    </span>
  );
}
