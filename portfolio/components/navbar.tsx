import Image from 'next/image'
import React from 'react'
import { MenuIcon } from './svgs'

export default function Navbar() {
    return (
        <header className='fixed top-0 left-0 w-full primary-color py-3 shadow-sm transition-shadow duration-500 z-50'>
            <div className="container-lg">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-3">
                        <Image src={'/profile.jpg'} height={45} width={45} alt='profile' className='border-2 border-white rounded-full px-[0.5] py-[0.5]' />
                        <h1 className='text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Noushad</h1>
                    </div>
                    <ul className='hidden lg:flex flex-row items-center gap-4'>
                        <li><a href="#" className='nav-link'>Home</a></li>
                        <li><a href="#" className='nav-link'>About</a></li>
                        <li><a href="#" className='nav-link'>Project</a></li>
                        <li><a href="#" className='nav-link'>Youtube</a></li>
                        <li><a href="#" className='nav-link'>Contact</a></li>
                    </ul>
                    <div className="inline-block lg:hidden border-2 border-white px-1 py-1 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
                        <MenuIcon className='size-5' />
                    </div>
                </div>
            </div>
        </header>
    )
}
