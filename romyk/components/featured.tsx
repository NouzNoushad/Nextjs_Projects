import Image from 'next/image'
import React from 'react'

export default function Featured() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="">
                    <h1 className="relative text-3xl lg:text-4xl font-bold tracking-wider">Our Featured Ice Cream <span className='md:h-[0.4rem] md:w-[90px] md:bg-[#FC95C4] md:opacity-50 md:rounded-full inline-block ml-10'></span></h1>
                    <p className="py-2">tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-1.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-4.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-1.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-3.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-4.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                    <div className="relative px-[20px] py-[20px] shadow-[0px_0px_20px_10px_#ededec]" style={{ backgroundImage: "linear-gradient(0deg, #ffffff 41%, #f2f2f0 41%)" }}>
                        <div className="min-h-[210px] text-center pb-[20px] flex items-center justify-center"><Image src="/images/img-5.png" alt="" width={1000} height={1000} className="w-[180px] h-[180px]" /></div>
                        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center italic font-bold text-2xl mx-auto py-[18px] px-[15px] mt-[-20px]">$10</div>
                        <h6 className="text-center font-bold text-[22px] text-[#373736]">Strawberry Ice Cream</h6>
                        <div className="mt-[20px] text-center"><p className='inline-block min-w-[150px] rounded-[40px] text-base py-[8px] px-[4px] text-[#fc95c4]' style={{ border: "1px solid #fc95c4" }}>Add To Cart</p></div>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[17px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-white hover:bg-black cursor-pointer"><a href="#">See More</a></div>
                </div>
            </div>
        </div>
    )
}
