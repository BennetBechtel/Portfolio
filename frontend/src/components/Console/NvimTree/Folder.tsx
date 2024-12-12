// Folder.tsx
interface ElementProps {
    image: string
    name: string
    root?: boolean
}

export default function({ image, name, root }: ElementProps) {
    let nameClass = "text-mocha-blue text-xl"
    if (root) {
        nameClass += " font-bold"
    } else {
        nameClass += " font-medium"
    }

    return (
        <span className="flex flex-row gap-1 items-center">
            <img src={image} alt="" className="h-4" />
            <p className={nameClass}>{name}</p>
        </span>
    )
}
