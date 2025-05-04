'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { CloseIcon, MenuIcon } from './svgs'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className='w-[300px] fixed top-0 lg:left-0 left-[-100%] bottom-0 overflow-y-auto px-[15px]  z-50 transition-all duration-300 primary-color border-r-4 border-white'>
            <div className="flex flex-col items-center justify-between relative pt-5">
                <div className="flex flex-col items-center gap-3 w-full py-5">
                    <Image src={'/profile.jpg'} height={100} width={100} alt='profile' className='border-4 border-white rounded-full px-[0.5] py-[0.5]' />
                    <h1 className='text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Noushad</h1>
                </div>
                <ul className={`mt-8 flex flex-col justify-center lg:justify-end gap-4 fixed top-0 primary-color h-full w-full lg:relative lg:top-0 lg:left-0 lg:bg-transparent z-50 transition-all duration-500 ${toggleMenu ? 'right-0' : 'right-[-100%]'}`}>
                    <li><button onClick={handleToggle} className='nav-btn'>
                        <a href="#home" className='nav-link'>
                            <i className="bi bi-house-fill navicon mr-[10px] text-white text-[20px]"></i>
                            Home</a>
                    </button>
                    </li>
                    <li><button onClick={handleToggle} className='nav-btn'>
                        <a href="#about" className='nav-link'>
                            <i className="bi bi-person-fill navicon mr-[10px] text-white text-[20px]"></i>
                            About</a>
                    </button>
                    </li>
                    <li><button onClick={handleToggle} className='nav-btn'>
                        <a href="#project" className='nav-link'>
                            <i className="bi bi-file-earmark-text-fill navicon mr-[10px] text-white text-[20px]"></i>
                            Project</a>
                    </button>
                    </li>
                    <li><button onClick={handleToggle} className='nav-btn'>
                        <a href="#youtube" className='nav-link'>
                            <i className="bi bi-youtube navicon mr-[10px] text-white text-[20px]"></i>
                            Youtube</a>
                    </button>
                    </li>
                    <li><button onClick={handleToggle} className='nav-btn'>
                        <a href="#contact" className='nav-link'>
                            <i className="bi bi-envelope-fill navicon mr-[10px] text-white text-[20px]"></i>
                            Contact</a>
                    </button>
                    </li>
                    <button onClick={handleToggle} className={`inline-block lg:hidden border-2 border-white px-1 py-1 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] fixed top-5 ${toggleMenu ? 'right-5' : 'right-[-100%]'}`}>
                        <CloseIcon className='size-5 text-white' />
                    </button>
                </ul>
                <button onClick={handleToggle} className="inline-block lg:hidden border-2 border-white px-1 py-1 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
                    <MenuIcon className='size-5' />
                </button>
            </div>
        </header>
    )
}
