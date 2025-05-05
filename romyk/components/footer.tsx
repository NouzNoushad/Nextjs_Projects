import React from 'react'

export default function Footer() {
    return (
        <div className="bg-[#262526]">
            <div className="container-width pt-[5rem]">
                <div className="grid grid-cols-12 gap-[20px]">
                    <div className="col-span-12 md:col-span-4">
                        <h1 className="text-4xl font-bold text-white pb-[10px]" style={{ borderBottom: '1px solid #fff' }}>Contact Us</h1>
                        <form action="/action_page.php" className='mt-5'>
                            <div className="">
                                <input type="text" className="w-full h-[55px] text-lg pt-[20px] pr-[20px] bg-transparent outline-none uppercase" placeholder="Name" name="Name" style={{ borderBottom: '1px solid #6d6d6d', color: 'white' }} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="w-full h-[55px] text-lg pt-[20px] pr-[20px] bg-transparent outline-none uppercase" placeholder="Email" name="Name" style={{ borderBottom: '1px solid #6d6d6d', color: 'white' }} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="w-full h-[55px] text-lg pt-[20px] pr-[20px] bg-transparent outline-none uppercase" placeholder="Phone Numbar" name="Email" style={{ borderBottom: '1px solid #6d6d6d', color: 'white' }} />
                            </div>
                            <div className="mt-[20px]">
                                <textarea className="w-full h-[55px] pt-[20px] pr-[20px] bg-transparent outline-none uppercase" placeholder="Massage" rows={5} id="comment" name="Massage" style={{ borderBottom: '1px solid #6d6d6d', color: 'white', fontSize: '17px' }}></textarea>
                            </div>
                        </form>
                        <div className="pt-[10px] w-[150px]"><a href="#" className='inline-block w-full text-lg py-[10px] uppercase bg-[#fc95c4] font-bold text-center' style={{ color: '#fefefd' }}>SEND</a></div>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <div className="location_text">
                            <ul className='text-white flex flex-col lg:flex-row items-start md:items-end lg:items-center justify-end gap-[20px]'>
                                <li>
                                    <a href="#">
                                        <span className="padding_left_10 active"><i className="bi bi-geo-alt-fill mr-2 text-xl"></i></span>Making this the first true</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="padding_left_10"><i className="bi bi-telephone-fill mr-2 text-xl"></i></span>Call : +01 1234567890
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="padding_left_10"><i className="bi bi-envelope-fill mr-2 text-xl"></i></span>Email : demo@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:mt-[150px] mt-[20px] text-white flex flex-col md:items-end items-start">
                            <h3 className="text-xl font-medium">Newsletter</h3>
                            <div className="mt-5 flex flex-row items-center">
                                <input className="h-[55px] max-w-[300px] bg-white outline-none" placeholder="Enter Your Email" id="comment" name="Enter Your Email" style={{ padding: '0px 20px', color: 'black' }}></input>
                                <div className="max-w-[170px] bg-[#fc95c4] h-[55px] px-3"><a href="#" className='flex items-center justify-center h-full uppercase'>Subscribe</a></div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <ul className='flex items-start md:justify-end gap-[10px] text-[#262526]'>
                                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white">
                                    <i className="bi bi-twitter-x"></i>
                                </li>
                                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white">
                                    <i className="bi bi-facebook"></i>
                                </li>
                                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white">
                                    <i className="bi bi-instagram"></i>
                                </li>
                                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white">
                                    <i className="bi bi-skype"></i>
                                </li>
                                <li className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white">
                                    <i className="bi bi-linkedin"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-[3rem] text-center text-white" style={{ borderTop: '0.1px solid gray' }}>
                    <p className='text-base py-[25px] inline-block'>2025 All Rights Reserved. Design by Free Html Templates Distribution by ThemeWagon</p>
                </div>
            </div>
        </div>
    )
}
