'use client'

import React from 'react'
import { AddIcon } from './svgs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const isAddScreen = pathname === "/add"
    return (
        <nav className='h-[10vh] bg-[#751aba] py-5'>
            <div className="max-w-[1250px] mx-auto px-5 xl:px-0 h-full">
                <div className="text-white flex flex-row items-center justify-between h-full">
                    <Link href={"/"} className='text-[1.3rem] tracking-wider font-bold'>Todo</Link>
                    <div className="fixed bottom-[10px] right-[10px]">
                        {
                            !isAddScreen ? <Link href={"/add"} className='bg-white rounded-md py-3 px-3 text-[#751aba] font-[600] text-[1rem] flex flex-row items-center gap-2 shadow-lg'>
                                <span className='hidden sm:inline-block'>Create Todo</span>
                                <AddIcon className='size-6' />
                            </Link> : null
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
