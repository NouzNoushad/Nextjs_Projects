'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Testimonials() {
    return (
        <div className="bg-[#F4FAFD]">
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='main-text'>Testimonials</h2>
                    <p className='pt-[20px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.</p>
                </div>
                <div className="pt-8">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className=""
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 1,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="min-h-[320px] text-center">
                                <p className='italic relative  mx-[15px] px-[20px] py-[20px] mb-[20px] rounded-[6px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-white'>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD]"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD] transform rotate-180"></i>
                                </p>
                                <Image src="/images/testimonials/testimonials-1.jpg" alt="about" width={1000} height={1000} className="w-[90px] h-[90px] rounded-full mx-auto" />
                                <h3 className='text-lg font-bold mt-[10px] mb-[5px]'>Saul Goodman</h3>
                                <h4 className='text-sm text-gray-600'>Ceo &amp; Founder</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[320px] text-center">
                                <p className='italic relative  mx-[15px] px-[20px] py-[20px] mb-[20px] rounded-[6px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-white'>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD]"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD] transform rotate-180"></i>
                                </p>
                                <Image src="/images/testimonials/testimonials-2.jpg" alt="about" width={1000} height={1000} className="w-[90px] h-[90px] rounded-full mx-auto" />
                                <h3 className='text-lg font-bold mt-[10px] mb-[5px]'>Sara Wilsson</h3>
                                <h4 className='text-sm text-gray-600'>Designer</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[320px] text-center">
                                <p className='italic relative  mx-[15px] px-[20px] py-[20px] mb-[20px] rounded-[6px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-white'>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD]"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD] transform rotate-180"></i>
                                </p>
                                <Image src="/images/testimonials/testimonials-3.jpg" alt="about" width={1000} height={1000} className="w-[90px] h-[90px] rounded-full mx-auto" />
                                <h3 className='text-lg font-bold mt-[10px] mb-[5px]'>Jena Karlis</h3>
                                <h4 className='text-sm text-gray-600'>Store Owner</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[320px] text-center">
                                <p className='italic relative  mx-[15px] px-[20px] py-[20px] mb-[20px] rounded-[6px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-white'>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD]"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD] transform rotate-180"></i>
                                </p>
                                <Image src="/images/testimonials/testimonials-4.jpg" alt="about" width={1000} height={1000} className="w-[90px] h-[90px] rounded-full mx-auto" />
                                <h3 className='text-lg font-bold mt-[10px] mb-[5px]'>Matt Brandon</h3>
                                <h4 className='text-sm text-gray-600'>Freelancer</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="min-h-[320px] text-center">
                                <p className='italic relative  mx-[15px] px-[20px] py-[20px] mb-[20px] rounded-[6px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-white'>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD]"></i>
                                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                    <i className="bi bi-quote inline-block text-[26px] text-[#149DDD] transform rotate-180"></i>
                                </p>
                                <Image src="/images/testimonials/testimonials-5.jpg" alt="about" width={1000} height={1000} className="w-[90px] h-[90px] rounded-full mx-auto" />
                                <h3 className='text-lg font-bold mt-[10px] mb-[5px]'>John Larson</h3>
                                <h4 className='text-sm text-gray-600'>Entrepreneur</h4>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
