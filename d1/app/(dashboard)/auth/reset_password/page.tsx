
import React from 'react'

export default function ResetPassword() {
    return (
        <>
            {/* <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold bg-primary-darker text-white">Loading...</div> */}
            <div className='bg-gray-100 text-gray-900 min-h-screen p-4 space-y-4 flex flex-col items-center justify-center'>
                <a href="#" className='inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark'>Dashboard</a>
                <main className='w-full'>
                    <div className="w-full mx-auto max-w-sm bg-white px-4 py-6 rounded-md space-y-6">
                        <p className='text-sm font-medium text-center text-gray-500'>You are only one step away from your new password, recover your password now.</p>
                        <form action="#" className='space-y-6'>
                            <input type="email" name='email' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' placeholder='Email address' required />
                            <input type="password" name='password' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' placeholder='Password' required />
                            <input type="password" name='confirm_password' className='w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary-100' placeholder='Confirm Password' required />
                            <div className="">
                                <button className='w-full px-4 py-3 font-medium text-center text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary'>
                                    Reset password
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
