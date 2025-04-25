import React from 'react'

export default function ScrollUpButton() {
    return (
        <a href="#" className="fixed bottom-[20px] right-[20px] h-[40px] w-[40px] bg-[#ff4a17] rounded-sm transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </a>
    )
}
