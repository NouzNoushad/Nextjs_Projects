import React from 'react'
import { CalendarIcon } from './Icons'

const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item1", "item2", "item3", "item4", "item5", "item6", "item1", "item2", "item3", "item4", "item5", "item6"]

export default function MainScreen() {
    return (
        <div className="lg:w-4/5 w-full h-full py-8 px-4 flex flex-col lg:ml-[20%]">
            <div className="flex flex-row items-start gap-3 justify-between">
                <div className="w-full flex md:flex-row flex-col items-start justify-between gap-3">
                    <input type="text" placeholder='Search' className='px-3 py-2 rounded-md primary-color sm:min-w-[500px] min-w-full' />
                    <button className='bg-green rounded-md px-3 py-2 flex flex-row items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>New Task</span>
                    </button>
                </div>
                <div className="lg:hidden primary-color px-2 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 primary-color rounded-lg px-2 py-5 flex-1">
                {
                    items.map((item, index) => (
                        <div key={index} className='bg-color rounded-md px-2 py-2 space-y-2'>
                            <h1>Task one</h1>
                            <p className='text-[0.7rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eius.</p>
                            <div className="flex flex-row items-center gap-2">
                                <div className="text-[0.6rem] px-2 py-1 rounded-md text-green bg-[#20cf8918] inline-block">
                                    Research
                                </div>
                                <div className="text-[0.6rem] px-2 py-1 rounded-md text-white bg-[#ffffff0e] inline-block">
                                    low
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <div className="text-[0.65rem] px-2 py-1 rounded-md primary-color flex flex-row items-center gap-1">
                                    <CalendarIcon className='size-3'/>
                                    18/01/2024</div>
                                <div className="h-[30px] w-[30px] rounded-full bg-slate-500"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
