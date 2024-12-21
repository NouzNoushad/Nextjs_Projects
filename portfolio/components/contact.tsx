import React from 'react'
import { EmailIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from './svgs'
import Link from 'next/link'

export default function Contact() {
    return (
        <main className='h-[calc(100vh-10vh)]' id='contact'>
            <div className="max-w-[600px] mx-auto px-5 xl:px-0 h-full">
                <div className="flex flex-col items-center justify-center h-full text-white space-y-8">
                    <h1 className='text-center text-[2rem] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>Contact Me</h1>
                    <p className='text-center text-black text-[1.2rem] font-[500] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>I’d love to hear from you! Whether you have a question, an exciting project to discuss, or just want to connect, feel free to reach out.</p>
                    <div className="flex text-black items-center gap-x-5">
                        <Link href={'https://github.com/NouzNoushad'}>
                            <GithubIcon className='size-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' />
                        </Link>
                        <Link href={'mailto:nhd7noushadazeez@gmail.com'}>
                            <EmailIcon className="size-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/noushad-c-a-aa693b150/'}>
                            <LinkedInIcon className='size-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]' />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UCPoox7q4iVDE14kWXq8W9aw'}>
                            <YoutubeIcon className="size-11 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
