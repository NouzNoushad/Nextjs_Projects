import Link from 'next/link'
import React from 'react'

export default function AboutMe() {
    const startDate = new Date("2022-10-03")
    const currentDate = new Date()

    const yearDifference = currentDate.getFullYear() - startDate.getFullYear() - (currentDate < new Date(startDate.setFullYear(currentDate.getFullYear())) ? 1 : 0)

    return (
        <main className='my-5 sm:h-[calc(100vh-10vh)]' id='about'>
            <div className="container-md h-full flex flex-col md:items-start justify-center">
                <h1 className="text-center md:text-start  text-[2rem] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-white">About Me</h1>
                <p className='my-10 text-black text-[1.1rem] sm:text-[1.2rem] font-[500] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>Hi, I’m Noushad CA, a passionate Flutter Developer with <span>{yearDifference}</span>+ years of experience building seamless, user-friendly mobile applications. I specialize in crafting intuitive interfaces and delivering high-quality solutions that align with client needs.<br />

                    Beyond Flutter, I have a growing interest in web development, with expertise in technologies like Next.js, TypeScript, and MongoDB. My focus is on creating meaningful digital experiences that not only function well but also leave a lasting impression.<br />

                    In addition to development, I love sharing knowledge and improving my skills. I run a YouTube channel called <Link href={'https://www.youtube.com/channel/UCPoox7q4iVDE14kWXq8W9aw'} className='transition-all duration-300 hover:text-red-100'>NOBOMAN</Link>, where I post content related to Flutter development and programming best practices.<br />

                    When I’m not coding, I’m learning new technologies, exploring creative solutions, or reflecting on my journey toward building a better future in tech.</p>

                <div className="flex flex-row items-center gap-4 text-white">
                    <Link href={'#contact'} className="border-[0.2rem] border-white rounded-md font-bold px-5 py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-300 hover:drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,0.8)] group">
                        <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] transition-all duration-300 tracking-wider group-hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">Hire Me</span></Link>
                    <button className="border-[0.2rem] border-white rounded-md font-bold px-5 py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-300 hover:drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,0.8)] group">
                        <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] transition-all duration-300 tracking-wider group-hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">Resume</span></button>
                </div>
            </div>
        </main>
    )
}
