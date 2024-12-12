// Buffer.tsx
interface BufferProps {
    image: string
    name: string
}

export default function({ image, name }: BufferProps) {
    return (
        <div className="h-full flex flex-row items-center gap-1 border-r-2 last:border-r-0 border-mocha-surface-2 pr-2 text-center">
            <img src={image} alt="" className="h-4" />
            <p className="font-semibold text-lg text-mocha-text">{name}</p>
            <p className="font-semibold text-base px-2 select-none cursor-pointer text-mocha-text ml-5">{"x"}</p>
        </div>
    )
}
