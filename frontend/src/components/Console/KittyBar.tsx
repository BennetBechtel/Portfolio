// KittyBar.tsx
import Cat from "../../assets/cat.png"

export default function() {
    return (
        <div className="h-6 flex flex-row gap-1 w-full items-center text-center px-1 bg-[#dddad6]">
            <img src={Cat} alt="" className="size-5" />
            <p className="font-bold text-lg text-gray-700">tmux</p>
        </div>
    )
}
