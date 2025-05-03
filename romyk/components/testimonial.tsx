'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Testimonial() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="text-center text-3xl lg:text-4xl font-bold tracking-wider">Testimonial</div>
                <div className="mt-8 mb-20 max-w-[900px] mx-auto h-[300px] pt-[50px] px-[40px] text-center" style={{ boxShadow: "0px 0px 20px 10px #ededec" }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className=""
                    >
                        <SwiperSlide>
                            <div className="" >
                                <p className="">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <h4 className="py-5 text-[20px] font-bold">Marri Fen</h4>
                                <div className=""><Image src="/images/client-img.png" alt="about" width={1000} height={1000} className="w-[200px] h-[200px] mx-auto" /></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="" >
                                <p className="">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <h4 className="py-5 text-[20px] font-bold">Marri Fen</h4>
                                <div className=""><Image src="/images/client-img.png" alt="about" width={1000} height={1000} className="w-[200px] h-[200px] mx-auto" /></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="" >
                                <p className="">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <h4 className="py-5 text-[20px] font-bold">Marri Fen</h4>
                                <div className=""><Image src="/images/client-img.png" alt="about" width={1000} height={1000} className="w-[200px] h-[200px] mx-auto" /></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
