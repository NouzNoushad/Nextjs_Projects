'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function MainHome() {
    const text = useRef(null)

    useEffect(() => {
        const typed = new Typed(
            text.current, {
            strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        }
        )

        return () => {
            typed.destroy()
        }
    })

    return (
        <div className="relative w-full min-h-screen bg-[url('/images/hero-bg.jpg')] before:absolute before:left-0 before:top-0 before:bg-black before:opacity-40 before:w-full before:h-full bg-cover">
            <div className="text-white absolute left-[20px] top-[calc(100%-60%)]">
                <h2 className='text-4xl md:text-5xl lg:text-[65px] font-bold tracking-wider'>Alex Smith</h2>
                <p className='mt-[5px] text-lg md:text-xl lg:text-2xl'>{`I'm `}<span ref={text} className='text-white'></span></p>
            </div>

        </div>
    )
}
