'use client'

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { QuoteIcon, StarFill } from '@/lib/icons';

export default function Testimonials() {
    return (
        <div className="relative bg-[url('/images/testimonials-bg.jpg')] h-full w-full before:absolute before:h-full before:w-full before:bg-[#000910] before:opacity-[0.7] before:top-0 before:left-0 context-center bg-cover bg-center">
            <div className="py-[5rem]">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className=""
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-[10px] max-w-[900px] mx-auto text-center text-white">
                            <Image src="/images/testimonials/testimonials-1.jpg" alt="about" width={1000} height={1000} className="w-[100px] h-[100px] rounded-full border-[6px] border-[rgba(255,255,255,0.15)]" />
                            <h3 className='text-[20px] font-bold'>Saul Goodman</h3>
                            <h4 className='text-sm text-[rgba(255,255,255,0.8)]'>Ceo &amp; Founder</h4>
                            <div className="flext flex-row items-center">
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                            </div>
                            <p className='italic'>
                                <QuoteIcon className='size-6 inline-block relative left-[-5px]' />
                                <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                <QuoteIcon className='size-6 inline-block relative  right-[-5px] top-[0px] scale-x-[-1] scale-y-[-1]' />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-[10px] max-w-[900px] mx-auto text-center text-white">
                            <Image src="/images/testimonials/testimonials-2.jpg" alt="about" width={1000} height={1000} className="w-[100px] h-[100px] rounded-full border-[6px] border-[rgba(255,255,255,0.15)]" />
                            <h3 className='text-[20px] font-bold'>Sara Wilsson</h3>
                            <h4 className='text-sm text-[rgba(255,255,255,0.8)]'>Designer</h4>
                            <div className="flext flex-row items-center">
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                            </div>
                            <p className='italic'>
                                <QuoteIcon className='size-6 inline-block relative left-[-5px]' />
                                <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                <QuoteIcon className='size-6 inline-block relative  right-[-5px] top-[0px] scale-x-[-1] scale-y-[-1]' />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-[10px] max-w-[900px] mx-auto text-center text-white">
                            <Image src="/images/testimonials/testimonials-3.jpg" alt="about" width={1000} height={1000} className="w-[100px] h-[100px] rounded-full border-[6px] border-[rgba(255,255,255,0.15)]" />
                            <h3 className='text-[20px] font-bold'>Jena Karlis</h3>
                            <h4 className='text-sm text-[rgba(255,255,255,0.8)]'>Store Owner</h4>
                            <div className="flext flex-row items-center">
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                            </div>
                            <p className='italic'>
                                <QuoteIcon className='size-6 inline-block relative left-[-5px]' />
                                <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                <QuoteIcon className='size-6 inline-block relative  right-[-5px] top-[0px] scale-x-[-1] scale-y-[-1]' />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-[10px] max-w-[900px] mx-auto text-center text-white">
                            <Image src="/images/testimonials/testimonials-4.jpg" alt="about" width={1000} height={1000} className="w-[100px] h-[100px] rounded-full border-[6px] border-[rgba(255,255,255,0.15)]" />
                            <h3 className='text-[20px] font-bold'>Matt Brandon</h3>
                            <h4 className='text-sm text-[rgba(255,255,255,0.8)]'>Freelancer</h4>
                            <div className="flext flex-row items-center">
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                            </div>
                            <p className='italic'>
                                <QuoteIcon className='size-6 inline-block relative left-[-5px]' />
                                <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                <QuoteIcon className='size-6 inline-block relative  right-[-5px] top-[0px] scale-x-[-1] scale-y-[-1]' />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-[10px] max-w-[900px] mx-auto text-center text-white">
                            <Image src="/images/testimonials/testimonials-5.jpg" alt="about" width={1000} height={1000} className="w-[100px] h-[100px] rounded-full border-[6px] border-[rgba(255,255,255,0.15)]" />
                            <h3 className='text-[20px] font-bold'>John Larson</h3>
                            <h4 className='text-sm text-[rgba(255,255,255,0.8)]'>Entrepreneur</h4>
                            <div className="flext flex-row items-center">
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                                <div className="inline-block pr-1">
                                    <StarFill />
                                </div>
                            </div>
                            <p className='italic'>
                                <QuoteIcon className='size-6 inline-block relative left-[-5px]' />
                                <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                <QuoteIcon className='size-6 inline-block relative  right-[-5px] top-[0px] scale-x-[-1] scale-y-[-1]' />
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
