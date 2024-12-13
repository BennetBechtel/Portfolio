// File.tsx
interface ElementProps {
  image: string;
  name: string;
}

export default function ({ image, name }: ElementProps) {
  return (
    <span className="flex flex-row items-center gap-1">
      <img src={image} alt="" className="h-4" />
      <p className="text-xl font-medium text-mocha-text">{name}</p>
    </span>
  );
}
