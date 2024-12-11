// Element.tsx
interface ElementProps {
    image: string
    name: string
}

export default function({ image, name }: ElementProps) {
    return (
        <span className="flex flex-row gap-1 items-center">
            <img src={image} alt="" className="h-4" />
            <p className="text-[#CBA6F7] font-medium text-xl">{name}</p>
        </span>
    )
}
