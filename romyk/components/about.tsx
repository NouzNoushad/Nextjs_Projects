import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="grid grid-cols-12 gap-[20px] items-center">
                    <div className="col-span-12 md:col-span-6 md:order-1 order-2">
                        <div className=""> <Image src="/images/about-img.png" alt="" width={1000} height={1000} className="w-full h-full" /></div>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:order-2 order-1">
                        <h1 className="relative text-3xl lg:text-4xl font-bold tracking-wider md:after:absolute lg:after:left-[60%] md:after:left-[70%] md:after:bottom-[10px] md:after:h-[0.35rem] md:after:w-[90px] md:after:bg-[#FC95C4] md:after:opacity-50 md:after:rounded-full">About Icecream</h1>
                        <p className="py-[30px]">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                        <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[18px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-white hover:bg-black cursor-pointer"><a href="#">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
