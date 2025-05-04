import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className="w-[300px] fixed top-0 lg:left-0 left-[-100%] bottom-0 overflow-y-auto px-[15px] bg-[#040b14] z-50 transition-all duration-300 border-left">
            <div className="my-[15px]">
                <Image src="/images/my-profile-img.jpg" alt="about" width={1000} height={1000} className="w-[120px] rounded-full profile-border mx-auto" />
            </div>
            <div className="text-center mb-[15px] text-white">
                <h1 className='text-2xl font-bold'>Alex Smith</h1>
            </div>
            <ul className='flex items-center justify-center gap-[10px] text-white'>
                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full link-bg">
                    <i className="bi bi-twitter-x"></i>
                </li>
                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full link-bg">
                    <i className="bi bi-facebook"></i>
                </li>
                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full link-bg">
                    <i className="bi bi-instagram"></i>
                </li>
                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full link-bg">
                    <i className="bi bi-skype"></i>
                </li>
                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full link-bg">
                    <i className="bi bi-linkedin"></i>
                </li>
            </ul>
            <nav className='my-5'>
                <ul>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-house navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Home</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-person navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>About</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-file-earmark-text navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Resume</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-images navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Portfolio</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-hdd-stack navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Services</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-menu-button navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Dropdown</span>
                    </a></li>
                    <li><a href="#" className='py-[15px] px-[10px] w-full text-base inline-block transition-colors duration-200 group'>
                        <i className="bi bi-envelope navicon mr-[10px] transition-colors duration-200 group-hover:text-[#149ddd] text-[#a8a9b4] text-[20px]"></i>
                        <span className='transition-colors duration-200 text-[#a8a9b4] group-hover:text-white'>Contact</span>
                    </a></li>
                </ul>
            </nav>
        </header>
    )
}
