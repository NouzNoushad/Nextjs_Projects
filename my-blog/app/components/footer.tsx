'use client'

import React, { useState } from 'react'
import { ArrowRight, DropdownDownIcon, Facebook, Instagram, LanguageIcon, LinkedIn, XTwitter, Youtube } from '../lib/svgs'

export default function Footer() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <footer id='footer' className='before:absolute before:left-[20px] before:w-[calc(100%-40px)] before:h-[0.05rem] before:bg-gray-300'>
            <div className="container-lg py-[4rem]">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    <div className="space-y-3 max-w-[200px]">
                        <h1 className='text-[1.5rem] font-bold'>Notion</h1>
                        <ul className='flex flex-row items-center gap-3'>
                            <li>
                                <Instagram className='size-5' color='#575757' />
                            </li>
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
                                <Youtube className='size-5' color='#575757' />
                            </li>
                        </ul>
                        <div className="pt-5 relative">
                            <button onClick={() => setShowDropdown(!showDropdown)} className='flex flex-row items-center gap-2 border bg-gray-100 rounded-md px-2 py-2'>
                                <LanguageIcon className='size-5' />
                                <span>English</span>
                                <DropdownDownIcon className='size-3' />
                            </button>
                            {showDropdown ? <ul className="absolute bottom-[2.5rem] left-0 bg-white shadow-lg rounded-md py-1 px-1 w-[250px] h-[300px] overflow-y-auto">
                                <li className='dropdown-text'>English</li>
                                <li className='dropdown-text'>France</li>
                                <li className='dropdown-text'>German</li>
                                <li className='dropdown-text'>Japanese</li>
                                <li className='dropdown-text'>Korean</li>
                                <li className='dropdown-text'>Brazil</li>
                                <li className='dropdown-text'>Latin America</li>
                                <li className='dropdown-text'>Spain</li>
                            </ul> : null}
                        </div>
                        <p className='text-gray-400 text-[0.9rem]'>Do Not Sell or Share My Info
                            Cookie settings</p>
                        <p className='text-[0.9rem]'>© 2024 Notion Labs, Inc.</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="space-y-2">
                            <h2 className='font-bold'>Company</h2>
                            <ul className='space-y-2 text-[0.95rem]'>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Status</a></li>
                                <li><a href="#">Terms & privacy</a></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h2 className='font-bold'>Download</h2>
                            <ul className='space-y-2 text-[0.95rem]'>
                                <li><a href="#">IOS & Android</a></li>
                                <li><a href="#">Mac & Windows</a></li>
                                <li><a href="#">Calendar</a></li>
                                <li><a href="#">Web Clipper</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="space-y-2">
                            <h2 className='font-bold'>Resources</h2>
                            <ul className='space-y-2 text-[0.95rem]'>
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Integrations</a></li>
                                <li><a href="#">Templates</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <h2 className='font-bold'>Notion for</h2>
                            <ul className='space-y-2 text-[0.95rem]'>
                                <li><a href="#">Enterprise</a></li>
                                <li><a href="#">Small business</a></li>
                                <li><a href="#">Personal</a></li>
                            </ul>
                            <a href="#" className='flex-1 flex flex-row items-center gap-2'>
                                <span className='font-bold text-[0.95rem] transition-all duration-300 hover:text-blue-500'>Explore more</span>
                                <ArrowRight className='size-4' />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
