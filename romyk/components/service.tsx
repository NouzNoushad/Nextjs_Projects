import Image from 'next/image'
import React from 'react'

export default function Service() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="">
                    <h1 className="relative text-3xl lg:text-4xl font-bold tracking-wider">Our Ice Cream Services <span className='md:h-[0.4rem] md:w-[90px] md:bg-[#FC95C4] md:opacity-50 md:rounded-full inline-block ml-10'></span></h1>
                    <p className="py-2">tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
                    <div className="py-[20px] px-[20px] md:px-[30px]" style={{ border: '1px solid #FC95C4' }}>
                        <h5 className="text-[20px] flex items-center"><span className="inline-block mr-[15px]"><Image src="/images/icon-1.png" alt="about" width={1000} height={1000} className="h-full w-full" /></span>Cookies Ice Cream</h5>
                        <p className="pt-3">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                    </div>
                    <div className="py-[20px] px-[20px] md:px-[30px]" style={{ border: '1px solid #FC95C4' }}>
                        <h5 className="text-[20px] flex items-center"><span className="inline-block mr-[15px]"><Image src="/images/icon-2.png" alt="about" width={1000} height={1000} className="h-full w-full" /></span>Cookies Ice Cream</h5>
                        <p className="pt-3">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                    </div>
                    <div className="py-[20px] px-[20px] md:px-[30px]" style={{ border: '1px solid #FC95C4' }}>
                        <h5 className="text-[20px] flex items-center"><span className="inline-block mr-[15px]"><Image src="/images/icon-1.png" alt="about" width={1000} height={1000} className="h-full w-full" /></span>Cookies Ice Cream</h5>
                        <p className="pt-3">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat </p>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[17px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-white hover:bg-black cursor-pointer"><a href="#">Read More</a></div>
                </div>
            </div>
        </div>
    )
}
