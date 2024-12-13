// Buffer.tsx
interface BufferProps {
  image: string;
  name: string;
}

export default function ({ image, name }: BufferProps) {
  return (
    <div className="flex h-full flex-row items-center gap-1 border-r-2 border-mocha-surface-2 text-center last:border-r-0 last:pr-5">
      <img src={image} alt="" className="h-4" />
      <p className="text-lg font-semibold text-mocha-text">{name}</p>
      <p className="ml-5 cursor-pointer select-none px-2 text-base font-semibold text-mocha-text">
        {"x"}
      </p>
    </div>
  );
}
