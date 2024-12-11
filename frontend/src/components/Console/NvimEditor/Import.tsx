// Import.tsx 
interface ImportProps {
    name: string
}

export default function({ name }: ImportProps) {
    return (
        <span className="text-xl flex flex-row gap-2 font-medium">
            <p className="text-[#CBA6F7]">import</p>
            <p className="text-[#f9e2af]">{name}</p>
            <p className="text-[#CBA6F7]">from</p>
            <p className="text-[#a6e3a1]">"./src/{name}"</p>
        </span>
    )
}
