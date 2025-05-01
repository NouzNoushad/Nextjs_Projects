import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className={`fixed top-0 left-0 w-full z-50 py-8 transition-all duration-200 h-[12vh] bg-transparent`}>
            <div className="container-width text-white flex flex-row items-center justify-between h-full">
                <a href="#">
                    <Image src="/images/logo.png" alt="" width={100} height={100} className="w-full h-full" />
                </a>
                <ul className="hidden lg:flex flex-row items-center justify-center gap-[35px] font-normal text-[17px] text-black">
                    <li><a className="text-primary" href="#">Home</a></li>
                    <li><a className="transition-colors duration-200 hover:text-primary" href="#about">About</a></li>
                    <li><a className="transition-colors duration-200 hover:text-primary" href="#services">Icecream</a></li>
                    <li><a className="transition-colors duration-200 hover:text-primary" href="#portfolio">Services</a></li>
                    <li><a className="transition-colors duration-200 hover:text-primary" href="#team">Blog</a></li>
                    <li><a className="transition-colors duration-200 hover:text-primary" href="#contact">Contact Us</a></li>
                </ul>
                <form action="" className='hidden lg:flex'>
                    <div className="flex items-center gap-[35px] text-black">
                        <a href="#" className='flex items-center gap-[5px] transition-colors duration-200 hover:text-primary'>Login <span><svg xmlns="http://www.w3.org/2000/svg" className='size-4' viewBox="0 0 448 512"><path fill='#000' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg></span></a>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-4'><path fill='#000' d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </div>
                    </div>
                </form>
                <div className="lg:hidden bg-transparent h-[35px] w-[45px] rounded-md border-2 border-red-500 flex items-center justify-center cursor-pointer" style={{ border: '1px solid lightgray' }}>
                    <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#000' d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>
        </header>
    )
}
