import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t-2 border-white shadow-lg'>
        <div className="container-md py-4">
            <div className="text-center">
                  <p className='text-black font-[500] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>© {new Date().getFullYear()} Noushad CA | All rights are reserved.</p>
            </div>
        </div>
    </footer>
  )
}
