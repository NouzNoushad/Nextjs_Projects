'use client'

import React from 'react'
import CountUp from 'react-countup'

export default function Stats() {
    return (
        <section className='bg-white'>
            <div className="py-[2rem] px-3">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="px-[20px] py-[20px]">
                        <i className="bi bi-emoji-smile text-[#149DDD] text-[44px]"></i>
                        <CountUp start={0} end={232} duration={1} className='text-[48px] ml-[20px] font-bold inline-block'/>
                        <p className='pl-[60px] text-gray-600'><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                    </div>
                    <div className="px-[20px] py-[20px]">
                        <i className="bi bi-journal-richtext text-[#149DDD] text-[44px]"></i>
                        <CountUp start={0} end={521} duration={1} className='text-[48px] ml-[20px] font-bold inline-block' />
                        <p className='pl-[60px] text-gray-600'><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                    </div>
                    <div className="px-[20px] py-[20px]">
                        <i className="bi bi-headset text-[#149DDD] text-[44px]"></i>
                        <CountUp start={0} end={1453} duration={1} className='text-[48px] ml-[20px] font-bold inline-block' />
                        <p className='pl-[60px] text-gray-600'><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                    </div>
                    <div className="px-[20px] py-[20px]">
                        <i className="bi bi-people text-[#149DDD] text-[44px]"></i>
                        <CountUp start={0} end={32} duration={1} className='text-[48px] ml-[20px] font-bold inline-block' />
                        <p className='pl-[60px] text-gray-600'><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
