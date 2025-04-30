'use client'

import React, { useEffect, useState } from 'react'

export default function ScrollUpButton() {
    const [scrollBtn, setScrollBtn] = useState("hidden")

    const handleScroll = () => {
        const windowHeight = window.scrollY;
        setScrollBtn(
            windowHeight > 500 ? "fixed bottom-[20px] right-[20px] h-[40px] w-[40px] bg-[#ff4a17] rounded-sm transition-all duration-200 z-40" : 'hidden'
        )
    }

    useEffect(() => {
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <a href="#home" className={scrollBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </a >
    )
}
