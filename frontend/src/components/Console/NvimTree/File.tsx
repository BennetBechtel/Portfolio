// File.tsx
interface ElementProps {
  image: string;
  name: string;
  onClick: Function;
}

export default function ({ image, name, onClick }: ElementProps) {
  return (
    <span
      onClick={() => onClick()}
      className="flex w-fit cursor-pointer flex-row items-center gap-1"
    >
      <img src={image} alt="" className="h-4" />
      <p className="text-md font-medium text-mocha-text sm:text-xl">{name}</p>
    </span>
  );
}
