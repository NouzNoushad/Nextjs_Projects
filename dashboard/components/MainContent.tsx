import React from 'react'

export default function MainContent() {
  return (
    <main className='w-full'>
        <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 w-full">
            <h1 className='text-2xl font-semibold'>Dashboard</h1>
            <a href="#" className='px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-[#0e7490] focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offse-white'>View on github</a>
        </div>
    </main>
  )
}
