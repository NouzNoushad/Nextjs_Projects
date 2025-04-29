import { EmojiActivity, EmojiBroadcast, EmojiEasel } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

export default function Services() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="space-y-1">
                    <h2 className="subtitle-text">Services</h2>
                    <p className="title-text uppercase">Featured Services</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[15px] gap-[40px] mt-[3rem]">
                    <div className="group transition-all duration-200 cursor-pointer">
                        <div className="overflow-hidden rounded-xl">
                            <Image src="/images/services-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="relative bg-[rgba(255,255,255,0.95)] py-[50px] px-[30px] text-center rounded-lg mt-[-100px] mx-[30px] shadow-[0px_0px_25px_rgba(0,0,0,0.1)]">
                            <div className="h-[72px] w-[72px] bg-[#FF4A17] rounded-full text-white border-[6px] border-white absolute top-[-36px] left-[calc(50%-36px)] flex items-center justify-center">
                                <EmojiActivity />
                            </div>
                            <h3 className='text-[#273D4E] font-bold text-[22px] my-[10px] transition-colors duration-200 group-hover:text-[#FF4A17]'>Nesciunt Mete</h3>
                            <p className='text-sm'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                        </div>
                    </div>
                    <div className="group transition-all duration-200 cursor-pointer">
                        <div className="overflow-hidden rounded-xl">
                            <Image src="/images/services-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="relative bg-[rgba(255,255,255,0.95)] py-[50px] px-[30px] text-center rounded-lg mt-[-100px] mx-[30px] shadow-[0px_0px_25px_rgba(0,0,0,0.1)]">
                            <div className="h-[72px] w-[72px] bg-[#FF4A17] rounded-full text-white border-[6px] border-white absolute top-[-36px] left-[calc(50%-36px)] flex items-center justify-center">
                                <EmojiBroadcast />
                            </div>
                            <h3 className='text-[#273D4E] font-bold text-[22px] my-[10px] transition-colors duration-200 group-hover:text-[#FF4A17]'>Eosle Commodi</h3>
                            <p className='text-sm'>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        </div>
                    </div>
                    <div className="group transition-all duration-200 cursor-pointer">
                        <div className="overflow-hidden rounded-xl">
                            <Image src="/images/services-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit rounded-xl transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="relative bg-[rgba(255,255,255,0.95)] py-[50px] px-[30px] text-center rounded-lg mt-[-100px] mx-[30px] shadow-[0px_0px_25px_rgba(0,0,0,0.1)]">
                            <div className="h-[72px] w-[72px] bg-[#FF4A17] rounded-full text-white border-[6px] border-white absolute top-[-36px] left-[calc(50%-36px)] flex items-center justify-center">
                                <EmojiEasel />
                            </div>
                            <h3 className='text-[#273D4E] font-bold text-[22px] my-[10px] transition-colors duration-200 group-hover:text-[#FF4A17]'>Ledo Markt</h3>
                            <p className='text-sm'>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
