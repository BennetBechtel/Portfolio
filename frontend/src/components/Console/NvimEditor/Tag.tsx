// Tag.tsx 
interface TagProps {
    name: string
}

export default function({ name }: TagProps) {
    return (
        <span className="text-xl flex flex-row font-medium">
            <p className="text-mocha-teal">{"<"}</p>
            <p className="text-mocha-mauve">{name}</p>
            <p className="text-mocha-teal">{"/>"}</p>
        </span>
    )
}
