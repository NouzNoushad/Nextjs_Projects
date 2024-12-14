'use client'

import { SidebarAction } from "../action/sidebarAction"

export default function LeftSection() {
    
    const {sidebarStyle, isFullScreen} = SidebarAction()
    
    return (
        <div id='sidebar' className={`lg:w-1/5 w-full pt-8 ${isFullScreen ? "" : "static"
            }`} style={{ ...sidebarStyle }}>
            <div className="max-w-[300px]">
                <h1 className="text-[3rem] font-bold leading-[3rem]">Tools <span className="italic font-[300]"><br />& Craft</span></h1>
                <p className="mt-4 text-gray-500">Thoughts on the future of work,
                    from the people and teams creating it.</p>
            </div>
            <div className="h-[0.02rem] w-full lg:w-[4rem] bg-gray-300 my-5"></div>
            <ul className="flex flex-row lg:flex-col gap-8 lg:gap-2 overflow-x-auto whitespace-nowrap pb-4">
                <li><a href="#">Latest</a></li>
                <li><a href="#" className="text-gray-500">Notion HQ</a></li>
                <li><a href="#" className="text-gray-500">For Teams</a></li>
                <li><a href="#" className="text-gray-500">Tech</a></li>
                <li><a href="#" className="text-gray-500">Inspiration</a></li>
                <li><a href="#" className="text-gray-500">Pioneers</a></li>
                <li><a href="#" className="text-gray-500">First Block</a></li>
            </ul>
        </div>
    )
}
