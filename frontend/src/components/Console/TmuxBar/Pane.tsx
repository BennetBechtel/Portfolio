// Pane.tsx
interface PaneProps {
  name: string;
  number: number;
  color: string;
}

export default function ({ name, number, color }: PaneProps) {
  return (
    <div className="flex h-6 cursor-pointer flex-row items-center overflow-hidden rounded-[10px]">
      <p className="flex h-full items-center bg-[#313244] px-2 text-lg text-[#cdd6f4]">{name}</p>
      <p
        style={{ background: color }}
        className="flex h-full items-center px-2 text-lg text-[#585b70]"
      >
        {number}
      </p>
    </div>
  );
}
