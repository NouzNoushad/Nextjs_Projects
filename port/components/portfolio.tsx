import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
    return (
        <section className='bg-[#F4FAFD]'>
            <div className="py-[3rem] px-3">
                <div className="">
                    <h2 className='main-text'>Portfolio</h2>
                    <p className='pt-[20px]'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="mt-8">
                    <ul className="flex flex-row items-center justify-center gap-[20px]">
                        <li className="font-base text-[#149ddd] text-sm transition-colors duration-200 hover:text-[#149ddd] cursor-pointer uppercase">All</li>
                        <li className="font-base text-[#444444] text-sm transition-colors duration-200 hover:text-[#149ddd] cursor-pointer uppercase">App</li>
                        <li className="font-base text-[#444444] text-sm transition-colors duration-200 hover:text-[#149ddd] cursor-pointer uppercase">Product</li>
                        <li className="font-base text-[#444444] text-sm transition-colors duration-200 hover:text-[#149ddd] cursor-pointer uppercase">Branding</li>
                        <li className="font-base text-[#444444] text-sm transition-colors duration-200 hover:text-[#149ddd] cursor-pointer uppercase">Books</li>
                    </ul>
                    <div className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/app-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">App 1</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/product-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Product 1</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/branding-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Branding 1</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/books-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Book 1</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/app-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">App 2</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/product-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Product 2</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/branding-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Branding 2</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/books-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Book 2</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/app-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">App 3</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/product-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Product 3</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/branding-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Branding 3</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden cursor-pointer group">
                            <Image src="/images/portfolio/books-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                            <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                <h4 className="px-[10px] py-[5px] bg-[#149ddd] text-white inline-block font-normal text-sm">Book 3</h4>
                                <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                    <i className="bi bi-zoom-in text-[26px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                    <i className="bi bi-link-45deg text-[30px] text-white hover:text-[#149ddd] transition-colors duration-200"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
