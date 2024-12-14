// Folder.tsx
interface ElementProps {
  image: string;
  name: string;
  root?: boolean;
}

export default function ({ image, name, root }: ElementProps) {
  let nameClass = "text-mocha-blue text-sm sm:text-xl";
  if (root) {
    nameClass += " font-bold";
  } else {
    nameClass += " font-medium";
  }

  return (
    <span className="flex flex-row items-center gap-1">
      <img src={image} alt="" className="h-4" />
      <p className={nameClass}>{name}</p>
    </span>
  );
}
