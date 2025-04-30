import { PlayIcon } from '@/lib/icons'
import React from 'react'

export default function MainHome() {
    return (
        <section id='home'>
            <div className="relative min-h-screen bg-[url('/images/hero-bg.jpg')] h-full w-full before:absolute before:h-full before:w-full before:bg-[#000910] before:opacity-[0.7] before:top-0 before:left-0 context-center bg-cover bg-center">
                <div className="relative max-w-[800px] mx-auto px-5 xl:px-0 flex flex-col space-y-5 items-center justify-center h-screen text-white">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">PLAN. LAUNCH. GROW.</h1>
                    <p className="md:text-2xl sm:text-xl text-center font-bold text-[#DADCDD]">We are team of talented designers making websites with Bootstrap</p>
                    <div className="flex md:flex-row flex-col items-center gap-3">
                        <button className="border-2 border-[#FF4A17] px-3 py-2 rounded-sm uppercase text-sm min-w-[10rem] font-medium tracking-wider cursor-pointer transition-colors duration-150 bg-[#FF4A17] hover:bg-[#FF4A17] hover:text-white hover:border-[#FF4A17]">Get Started</button>
                        <a href="" className="flex flex-row items-center space-x-2">
                            <PlayIcon className="size-8" />
                            <span>Watch Video</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
