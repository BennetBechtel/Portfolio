// Pane.tsx
interface PaneProps {
    name: string
    number: number
    color: string
}

export default function({ name, number, color }: PaneProps) {
    return (
        <div className="h-6 flex flex-row rounded-[10px] items-center overflow-hidden">
            <p className="bg-[#313244] text-[#cdd6f4] px-2 h-full flex items-center text-lg">{name}</p>
            <p style={{ "background": color }} className="text-[#585b70] px-2 h-full flex items-center text-lg">{number}</p>
        </div>

    )
}
