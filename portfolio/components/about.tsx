import Link from 'next/link'
import React from 'react'

export default function AboutMe() {

    const getExperience = () => {
        const startDate = new Date("2022-10-03");
        const now = new Date();

        const years = now.getFullYear() - startDate.getFullYear();
        const months = now.getMonth() - startDate.getMonth();

        const totalMonths = years * 12 + months;

        const finalYears = Math.floor(totalMonths / 12);
        const finalMonths = totalMonths % 12;

        if (finalYears > 0 && finalMonths > 0)
            return `${finalYears}.${finalMonths} years`;
        if (finalYears > 0) return `${finalYears}+ years`;
        return `${finalMonths} months`;
    };

    return (
        <main className='my-5 sm:h-[calc(100vh-10vh)]' id='about'>
            <div className="container-md h-full flex flex-col md:items-start justify-center">
                <h1 className="text-center md:text-start  text-[2rem] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-white">About Me</h1>
                <p className='my-10 text-black text-[1.1rem] sm:text-[1.2rem] font-[500] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>Hi, I’m Noushad CA, a passionate Flutter Developer with <span>{getExperience()}</span> of experience building seamless, user-friendly mobile applications. I specialize in crafting intuitive interfaces and delivering high-quality solutions that align with client needs.<br />
                    While Flutter remains my main focus, I also enjoy exploring web development as a hobby — experimenting with technologies like Next.js, TypeScript, Golang and PostgreSQL to expand my perspective and technical skillset.<br />
                    In addition to development, I love sharing knowledge and improving my skills. I run a YouTube channel called <Link href={'https://www.youtube.com/channel/UCPoox7q4iVDE14kWXq8W9aw'} className='transition-all duration-300 hover:text-red-100 italic'>NOBOMAN</Link>, where I post content related to Flutter development and programming best practices.<br /></p>
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
