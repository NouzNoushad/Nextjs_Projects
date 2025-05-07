import React from 'react'

export default function Skills() {
    return (
        <section className='bg-[#F4FAFD]'>
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='main-text'>Skills</h2>
                    <p className='pt-[20px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.</p>
                </div>
                <div className="mt-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>HTML</span> <span className="ml-auto">100%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>CSS</span> <span className="ml-auto">90%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>JavaScript</span> <span className="ml-auto">75%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>PHP</span> <span className="ml-auto">80%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>WordPress/CMS</span> <span className="ml-auto">90%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="font-semibold text-xs w-full mb-2">
                            <span className="uppercase w-full flex flex-row justify-between"><span>Photoshop</span> <span className="ml-auto">55%</span></span>
                            <div className="mt-2 w-full bg-gray-200 h-[10px]">
                                <div className='bg-[#149DDD] h-[10px] transition-all duration-200' style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
