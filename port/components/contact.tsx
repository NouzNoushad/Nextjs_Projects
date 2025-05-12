import React from 'react'

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='main-text'>Contact</h2>
                    <p className='pt-[20px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="pt-10 grid grid-cols-12 gap-[20px]">
                    <div className="col-span-12 md:col-span-5">
                        <div className="px-[30px] py-[30px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] space-y-8">
                            <div className="flex items-center group gap-[15px]">
                                <div className="h-[44px] w-[44px] rounded-full flex items-center justify-center bg-[#EDF8FD] transition-colors duration-200 group-hover:bg-[#149DDD]">
                                    <i className="bi bi-geo-alt flex-shrink-0 text-[20px] text-[#149DDD] transition-colors duration-200 group-hover:text-white"></i>
                                </div>
                                <div className="space-y-1">
                                    <h3 className='text-lg font-bold'>Address</h3>
                                    <p className='text-sm'>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="flex items-center group gap-[15px]">
                                <div className="h-[44px] w-[44px] rounded-full flex items-center justify-center bg-[#EDF8FD] transition-colors duration-200 group-hover:bg-[#149DDD]">
                                    <i className="bi bi-telephone flex-shrink-0 text-[20px] text-[#149DDD] transition-colors duration-200 group-hover:text-white"></i>
                                </div>
                                <div className="space-y-1">
                                    <h3 className='text-lg font-bold'>Call Us</h3>
                                    <p className='text-sm'>+1 5589 55488 55</p>
                                </div>
                            </div>
                            <div className="flex items-center group gap-[15px]">
                                <div className="h-[44px] w-[44px] rounded-full flex items-center justify-center bg-[#EDF8FD] transition-colors duration-200 group-hover:bg-[#149DDD]">
                                    <i className="bi bi-envelope flex-shrink-0 text-[20px] text-[#149DDD] transition-colors duration-200 group-hover:text-white"></i>
                                </div>
                                <div className="space-y-1">
                                    <h3 className='text-lg font-bold'>Email Us</h3>
                                    <p className='text-sm'>info@example.com</p>
                                </div>
                            </div>
                        </div>
                        {/* Map */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder="0" style={{ border: '0', width: '100%', height: '270px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <div className="bg-white px-[25px] py-[25px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
                            <div className="grid grid-cols-12 gap-[20px]">
                                <div className="col-span-6 space-y-2">
                                    <label className="inline-block">Your Name</label>
                                    <input type="text" name='name' className='input-text' />
                                </div>
                                <div className="col-span-6 space-y-2">
                                    <label className="inline-block">Your Email</label>
                                    <input type="text" name='name' className='input-text' />
                                </div>
                                <div className="col-span-12 space-y-2">
                                    <label className="inline-block">Subject</label>
                                    <input type="text" name='subject' className='input-text' />
                                </div>
                                <div className="col-span-12 space-y-2">
                                    <label className="inline-block">Message</label>
                                    <textarea rows={10} name='message' className='input-text' />
                                </div>
                                <div className="col-span-12 text-center">
                                    <button className='bg-[#149DDD] py-[10px] px-[30px] text-white rounded-[50px] cursor-pointer transition-colors duration-200 hover:bg-[#149DDD]'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
