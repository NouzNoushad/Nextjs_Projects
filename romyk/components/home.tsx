'use client'

import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MainHome() {
    return (
        <div className="relative bg-[url('/images/banner-bg.png')] min-h-screen px-5 xl:px-0 bg-cover bg-center w-full">
            <div className="">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="max-w-[1150px] mx-auto flex items-center justify-center"
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center h-screen">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider font-extrabold w-full md:w-[30%]">Ice Cream</h1>
                                <p className="text-base py-5 font-medium w-full md:w-[70%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[18px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-black hover:bg-gray-100 cursor-pointer"><a href="#">Order Now</a></div>
                            </div>
                            <div className="">
                                <Image src="/images/banner-img.png" alt="about" width={1000} height={1000} className="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center h-screen">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider font-extrabold w-full md:w-[30%]">Ice Cream</h1>
                                <p className="text-base py-5 font-medium w-full md:w-[70%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[18px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-black hover:bg-gray-100 cursor-pointer"><a href="#">Order Now</a></div>
                            </div>
                            <div className="">
                                <Image src="/images/banner-img.png" alt="about" width={1000} height={1000} className="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center h-screen">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wider font-extrabold w-full md:w-[30%]">Ice Cream</h1>
                                <p className="text-base py-5 font-medium w-full md:w-[70%]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                <div className="bg-[#FC95C4] px-[10px] py-[8px] text-white text-center text-[18px] rounded-[5px] self-start w-[170px] transition-colors duration-200  hover:text-black hover:bg-gray-100 cursor-pointer"><a href="#">Order Now</a></div>
                            </div>
                            <div className="">
                                <Image src="/images/banner-img.png" alt="about" width={1000} height={1000} className="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
