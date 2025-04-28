import { EmojiBarChart, EmojiBinoculars, EmojiBriefcase, EmojiBrightnessHighFill, EmojiCalendarWeek, EmojiCardChecklist } from '@/lib/icons'
import React from 'react'

export default function Services2() {
    return (
        <div className="bg-[#F0F3F9]">
            <div className="container-width py-[3rem]">
                <div className="space-y-1">
                    <h2 className="subtitle-text">Services</h2>
                    <p className="title-text">CHECK OUR SERVICES</p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-10">
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiBriefcase />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Lorem Ipsum</a></h4>
                            <p className="text-sm font-medium">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiCardChecklist />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Dolor Sitema</a></h4>
                            <p className="text-sm font-medium">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiBarChart />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Sed ut perspiciatis</a></h4>
                            <p className="text-sm font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiBinoculars fillColor='"#FF4A17"' className='size-10' />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Magni Dolores</a></h4>
                            <p className="text-sm font-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiBrightnessHighFill />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Nemo Enim</a></h4>
                            <p className="text-sm font-medium">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                        <div className="">
                            <EmojiCalendarWeek />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Eiusmod Tempor</a></h4>
                            <p className="text-sm font-medium">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
