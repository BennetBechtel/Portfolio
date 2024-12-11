// Tag.tsx 
interface TagProps {
    name: string
}

export default function({ name }: TagProps) {
    return (
        <span className="text-xl flex flex-row font-medium">
            <p className="text-[#94e2d5]">{"<"}</p>
            <p className="text-[#cba6f7]">{name}</p>
            <p className="text-[#94e2d5]">{"/>"}</p>
        </span>
    )
}
