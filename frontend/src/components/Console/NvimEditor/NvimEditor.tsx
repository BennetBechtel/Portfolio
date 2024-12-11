import Import from "./Import";
import Tag from "./Tag";

// NvimEditor.tsx
export default function() {
    return (
        <div className="h-full flex flex-col px-5">
            <p className="font-medium text-xl text-[#9399b2]">// Main.jsx</p>
            <Import name="About" />
            <Import name="Skills" />
            <Import name="Projects" />
            <Import name="Contact" />

            <br />

            <span className="text-xl flex flex-row gap-2 font-medium">
                <p className="text-[#CBA6F7]">const</p>
                <p className="text-[#89b4fa]">Main</p>
                <p className="text-[#94e2d5]">=</p>
                <p className="text-[#9399b2]">()</p>
                <p className="text-[#94e2d5]">{"=>"}</p>
                <p className="text-[#9399b2]">{"{"}</p>
            </span>

            {/* Inside Main Function */}
            <div className="text-xl font-medium flex flex-row gap-2 ml-8">
                <p className="text-[#CBA6F7]">return</p>
                <p className="text-[#9399b2]">(</p>
            </div>

            {/* Inside Return Statement */}
            <div className="text-xl font-medium flex flex-row gap-2 ml-16">
                <p className="text-[#94e2d5]">{"<div>"}</p>
            </div>

            {/* Inside Div */}
            <div className="ml-24">
                <Tag name="About" />
                <Tag name="Skills" />
                <Tag name="Projects" />
                <Tag name="Contact" />
            </div>


            <div className="text-xl font-medium flex flex-row gap-2 ml-16">
                <p className="text-[#94e2d5]">{"</div>"}</p>
            </div>


            <p className="text-[#9399b2] ml-8">)</p>

            <p className="text-[#9399b2]">{"}"}</p>

            <br />

            <span className="text-xl flex flex-row gap-2 font-medium">
                <p className="text-[#94e2d5]">export</p>
                <p className="text-[#CBA6F7]">default</p>
                <p className="text-[#89b4fa]">Main</p>
            </span>
        </div>
    )
}
