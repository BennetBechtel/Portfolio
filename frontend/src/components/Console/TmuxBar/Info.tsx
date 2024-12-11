// Info.tsx
interface InfoProps {
    image: string;
    text: string;
    color: string;
}

export default function({ image, text, color }: InfoProps) {
    return (
        <div className="h-6 flex flex-row rounded-[10px] items-center overflow-hidden">
            <span style={{ "background": color }} className="h-full text-center items-center flex pl-2 pr-[6px] justify-center">
                <img src={image} className="h-4 w-auto" />
            </span>
            <p className="bg-[#313244] text-[#cdd6f4] px-2 h-full flex items-center text-lg">{text}</p>
        </div>

    )
}
