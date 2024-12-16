// HeadingTag.tsx
interface HeadingTagProps {
  size: number;
  text: string;
}

export default function ({ size, text }: HeadingTagProps) {
  return (
    <div className="flex flex-row">
      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"<"}</p>
        <p className="text-mocha-pink">h</p>
        <p className="text-mocha-pink">{size}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>

      <p className="text-md whitespace-nowrap font-extrabold text-mocha-blue sm:text-xl">{text}</p>

      <span className="text-md flex flex-row font-medium sm:text-xl">
        <p className="text-mocha-teal">{"</"}</p>
        <p className="text-mocha-pink">h</p>
        <p className="text-mocha-pink">{size}</p>
        <p className="text-mocha-teal">{">"}</p>
      </span>
    </div>
  );
}
