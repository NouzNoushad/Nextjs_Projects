import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from '@/lib/icons'
import React from 'react'

export default function Footer() {
    return (
        <div className="bg-[#000910]">
            <div className="container-width py-[3rem]">
                <div className="text-white">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6 col-span-12">
                            <a href="#" className="">
                                <span className="text-[26px] font-bold leading-[1px]">Dewi</span>
                            </a>
                            <div className="pt-[1rem] space-y-[5px]">
                                <p className='text-sm'>A108 Adam Street</p>
                                <p className='text-sm'>New York, NY 535022</p>
                                <p className="text-sm mt-[1rem]"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                <p className='text-sm'><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                            <div className="mt-[1.5rem] flex flex-row items-center gap-[10px]">
                                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-gray">
                                    <Twitter className='size-4' />
                                </div>
                                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-gray">
                                    <Facebook className='size-4' />
                                </div>
                                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-gray">
                                    <Instagram className='size-4' />
                                </div>
                                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-gray">
                                    <Linkedin className='size-4' />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-3 col-span-12">
                            <h4 className='text-[16px] font-bold pb-[12px]'>Useful Links</h4>
                            <ul className='space-y-[10px]'>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Home</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>About us</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Services</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Terms of service</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2 md:col-span-3 col-span-12">
                            <h4 className='text-[16px] font-bold pb-[12px]'>Our Services</h4>
                            <ul className='space-y-[10px]'>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Web Design</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Web Development</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Product Management</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Marketing</a></li>
                                <li className='flex flex-row items-center gap-1'><ChevronRight /><a href="#" className='text-sm transition-colors duration-200 hover:text-[#FF4A17]'>Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4 md:col-span-12 col-span-12">
                            <h4 className='text-[16px] font-bold pb-[12px]'>Our Newsletter</h4>
                            <p className='text-sm'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            <form action="" className='mt-8'>
                                <div className="border border-gray-400 rounded-md flex relative">
                                    <input type="email" name='email' className='px-[8px] py-[8px] w-full outline-none' />
                                    <input type="submit" value="Subscribe" className='px-[20px] bg-[#FF4A17] rounded-tr-md rounded-br-md mt-[-1px] mb-[-1px] mr-[-1px]' />
                                </div>
                            </form>
                        </div>12
                    </div>
                </div>
                <div className="mt-[30px] text-center text-white border-t-[0.1px] border-gray-500">
                    <p className='text-sm mt-5'>© <span>Copyright</span> <strong className="px-1">Dewi</strong> <span>All Rights Reserved</span></p>
                    <div className="text-xs mt-2 font-medium">
                        Designed by <a href="#" className='text-[#FF4A17]'>BootstrapMade</a> Distributed by <a href="#" className='text-[#FF4A17]'>ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
