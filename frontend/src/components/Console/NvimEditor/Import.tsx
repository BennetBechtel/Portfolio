// Import.tsx 
interface ImportProps {
    name: string
}

export default function({ name }: ImportProps) {
    return (
        <span className="text-xl flex flex-row gap-2 font-medium">
            <p className="text-mocha-teal">import</p>
            <p className="text-mocha-yellow">{name}</p>
            <p className="text-mocha-mauve">from</p>
            <p className="text-mocha-green">"./src/{name}"</p>
        </span>
    )
}
