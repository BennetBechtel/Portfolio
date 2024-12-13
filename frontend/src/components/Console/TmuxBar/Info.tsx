// Info.tsx
interface InfoProps {
  image: string;
  text: string;
  color: string;
}

export default function ({ image, text, color }: InfoProps) {
  return (
    <div className="flex h-6 flex-row items-center overflow-hidden rounded-[10px]">
      <span
        style={{ background: color }}
        className="flex h-full items-center justify-center pl-2 pr-[6px] text-center"
      >
        <img src={image} className="h-4 w-auto" />
      </span>
      <p className="flex h-full items-center bg-[#313244] px-2 text-lg text-[#cdd6f4]">{text}</p>
    </div>
  );
}
