import { EmojiEnvelope, EmojiGeoAlt, EmojiTelephone } from '@/lib/icons'
import React from 'react'

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="container-width py-[3rem]">
                <div className="space-y-1">
                    <h2 className="subtitle-text">Contact</h2>
                    <p className="title-text uppercase">Necessitatibus eius consequatur</p>
                </div>
                <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <div className="bg-white px-[10px] py-[30px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-col items-center space-y-2 text-center">
                                <div className="size-[56px] border-2 border-dotted border-[#FF4A17] rounded-full flex items-center justify-center">
                                    <EmojiGeoAlt className='size-6 ' />
                                </div>
                                <h3 className='font-bold text-[18px] text-[#696969]'>Address</h3>
                                <p className='text-sm text-[#696969] font-medium'>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-white px-[10px] py-[30px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-col items-center space-y-2 text-center">
                                <div className="size-[56px] border-2 border-dotted border-[#FF4A17] rounded-full flex items-center justify-center">
                                    <EmojiTelephone className='size-6 ' />
                                </div>
                                <h3 className='font-bold text-[18px] text-[#696969]'>Call Us</h3>
                                <p className='text-sm text-[#696969] font-medium'>+1 5589 55488 55</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="bg-white px-[10px] py-[30px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] flex flex-col items-center space-y-2 text-center">
                                <div className="size-[56px] border-2 border-dotted border-[#FF4A17] rounded-full flex items-center justify-center">
                                    <EmojiEnvelope className='size-6 ' />
                                </div>
                                <h3 className='font-bold text-[18px] text-[#696969]'>Email Us</h3>
                                <p className='text-sm text-[#696969] font-medium'>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}
