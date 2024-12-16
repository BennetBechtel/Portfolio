// PageTag.tsx
interface PageTagProps {
  name: string;
  onClick?: Function;
}

export default function ({ name, onClick }: PageTagProps) {
  return (
    <span
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          return;
        }
      }}
      className={`text-md flex w-fit flex-row font-medium sm:text-xl ${onClick && "cursor-pointer"}`}
    >
      <p className="text-mocha-teal">{"<"}</p>
      <p className="text-mocha-mauve">{name}</p>
      <p className="pl-2 text-mocha-teal">{"/>"}</p>
    </span>
  );
}
