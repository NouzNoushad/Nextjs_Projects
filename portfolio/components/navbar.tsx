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
        <header className='fixed top-0 left-0 w-full primary-color py-3 shadow-sm transition-shadow duration-500 z-[1000]'>
            <div className="container-lg">
                <div className="flex flex-row items-center justify-between relative">
                    <div className="flex flex-row items-center gap-3">
                        <Image src={'/profile.jpg'} height={45} width={45} alt='profile' className='border-2 border-white rounded-full px-[0.5] py-[0.5]' />
                        <h1 className='text-2xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Noushad</h1>
                    </div>
                    <ul className={`flex lg:flex-row flex-col items-center justify-center lg:justify-end gap-4 fixed top-0 primary-color h-full w-full lg:relative lg:top-0 lg:left-0 lg:bg-transparent z-50 transition-all duration-500 ${toggleMenu ? 'right-0' : 'right-[-100%]'}`}>
                        <li><button onClick={handleToggle}>
                            <a href="#home" className='nav-link'>Home</a>
                        </button>
                        </li>
                        <li><button onClick={handleToggle}>
                            <a href="#about" className='nav-link'>About</a>
                        </button>
                        </li>
                        <li><button onClick={handleToggle}>
                            <a href="#project" className='nav-link'>Project</a>
                        </button>
                        </li>
                        <li><button onClick={handleToggle}>
                            <a href="#youtube" className='nav-link'>Youtube</a>
                        </button>
                        </li>
                        <li><button onClick={handleToggle}>
                            <a href="#contact" className='nav-link'>Contact</a>
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
            </div>
        </header>
    )
}
