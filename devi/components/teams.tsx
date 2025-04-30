import { Facebook, Instagram, Linkedin, Twitter } from '@/lib/icons'
import Image from 'next/image'
import React from 'react'

export default function Teams() {
    return (
        <section id='team' className="bg-[#F0F3F9]">
            <div className="container-width py-[3rem]">
                <div className="space-y-1">
                    <h2 className="subtitle-text">Team</h2>
                    <p className="title-text">CHECK OUR TEAM</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[15px] gap-[40px] mt-[3rem]">
                    <div className="relative">
                        <div className="overflow-hidden mb-[50px] bg-amber-100"><Image src="/images/team/team-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" /></div>
                        <div className="absolute bottom-[-5px] left-[20px] right-[20px] py-[20px] px-[15px] overflow-hidden bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
                            <h4 className='team-text'>Walter White</h4>
                            <span className='italic text-[13px] block'>Chief Executive Officer</span>
                            <div className="flex flex-row items-center gap-[5px] absolute right-[15px] bottom-[15px]">
                                <a href=""><Twitter className='' /></a>
                                <a href=""><Facebook className='' /></a>
                                <a href=""><Instagram className='' /></a>
                                <a href=""><Linkedin className='' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden mb-[50px] bg-amber-100"><Image src="/images/team/team-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" /></div>
                        <div className="absolute bottom-[-5px] left-[20px] right-[20px] py-[20px] px-[15px] overflow-hidden bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
                            <h4 className='team-text'>Sarah Jhonson</h4>
                            <span className='italic text-[13px] block'>Product Managerr</span>
                            <div className="flex flex-row items-center gap-[5px] absolute right-[15px] bottom-[15px]">
                                <a href=""><Twitter className='' /></a>
                                <a href=""><Facebook className='' /></a>
                                <a href=""><Instagram className='' /></a>
                                <a href=""><Linkedin className='' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden mb-[50px] bg-amber-100"><Image src="/images/team/team-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" /></div>
                        <div className="absolute bottom-[-5px] left-[20px] right-[20px] py-[20px] px-[15px] overflow-hidden bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
                            <h4 className='team-text'>William Anderson</h4>
                            <span className='italic text-[13px] block'>CTO</span>
                            <div className="flex flex-row items-center gap-[5px] absolute right-[15px] bottom-[15px]">
                                <a href=""><Twitter className='' /></a>
                                <a href=""><Facebook className='' /></a>
                                <a href=""><Instagram className='' /></a>
                                <a href=""><Linkedin className='' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
