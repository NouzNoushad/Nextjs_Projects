import React from 'react'
import { auth } from '@/auth'
import NavLinks from './navLinks'

export default async function Navbar() {

    const session = await auth()

    return (
        <nav className='h-[10vh] py-2 fixed w-full bg-white border-b z-50'>
            <div className="container h-full">
                <div className="flex flex-row items-center justify-between h-full gap-8">
                    <h1 className='font-[600] text-[1.4rem]'>Notion</h1>
                    <NavLinks session={session}/>
                </div>
            </div>
        </nav>
    )
}
