import React from 'react'

export default function Footer() {
    return (
        <div className="bg-[#262526]">
            <div className="container-width py-[5rem]">
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-4">
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
                    <div className="md:col-span-8"></div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}
