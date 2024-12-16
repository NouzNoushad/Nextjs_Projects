import { signOut } from '@/auth'
import { Session } from 'next-auth'
import Link from 'next/link'
import React from 'react'

export default function AuthSection({session}: {session: Session | null}) {

    return (
        <div>
            {
                session && session?.user ? (
                    <div className="flex flex-row items-center gap-2">
                        <Link href={'/create'} className='nav-btn'>Create</Link>
                        <form action={async () => {
                            await signOut({ redirectTo: '/' })
                        }}>
                            <button className='nav-btn'>Logout</button>
                        </form>
                    </div>
                ) : <Link href={'/login'} className='nav-btn'>
                    Log in
                </Link>
            }
        </div>
    )
}
