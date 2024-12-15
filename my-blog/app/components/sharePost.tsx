import React from 'react'
import { Email, Facebook, LinkedIn, XTwitter } from './svgs'

export default function SharePost() {
    return (
        <div className="space-y-3">
            <p className='uppercase text-[0.7rem] text-gray-500'>Share this post</p>
            <ul className='flex flex-row items-center gap-3'>
                <li>
                    <XTwitter className='size-5' color='#575757' />
                </li>
                <li>
                    <LinkedIn className='size-5' color='#575757' />
                </li>
                <li>
                    <Facebook className='size-5' color='#575757' />
                </li>
                <li>
                    <Email className='size-5' color='#575757' />
                </li>
            </ul>
        </div>
    )
}
