// KittyBar.tsx
import Cat from "../../assets/cat.png";

export default function () {
  return (
    <div className="flex h-6 w-full flex-row items-center gap-1 bg-[#dddad6] px-1 text-center">
      <img src={Cat} alt="" className="size-5" />
      <p className="text-lg font-bold text-gray-700">tmux</p>
    </div>
  );
}
