import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
import Status from "@/components/status";
import { EmojiLink, EmojiZoomIn } from "@/lib/icons";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <Header />
            {/* Main */}
            <MainHome />
            {/* About */}
            <About />
            {/* Status */}
            <Status />
            {/* Services */}
            {/* Clients */}
            <Clients />
            {/* Features */}
            {/* Services 2 */}
            <Services2 />
            {/* Testimonials */}
            {/* Portfolio */}
            <div className="">
                <div className="container-width py-[3rem]">
                    <div className="space-y-1">
                        <h2 className="subtitle-text">Portfolio</h2>
                        <p className="title-text">CHECK OUR PORTFOLIO</p>
                    </div>
                    <div className="mt-8">
                        <ul className="flex flex-row items-center justify-center gap-[20px]">
                            <li className="font-semibold text-[#FF4A17] text-lg transition-colors duration-200 hover:text-[#FF4A17] cursor-pointer">All</li>
                            <li className="font-semibold text-[#444444] text-lg transition-colors duration-200 hover:text-[#FF4A17] cursor-pointer">App</li>
                            <li className="font-semibold text-[#444444] text-lg transition-colors duration-200 hover:text-[#FF4A17] cursor-pointer">Product</li>
                            <li className="font-semibold text-[#444444] text-lg transition-colors duration-200 hover:text-[#FF4A17] cursor-pointer">Branding</li>
                            <li className="font-semibold text-[#444444] text-lg transition-colors duration-200 hover:text-[#FF4A17] cursor-pointer">Books</li>
                        </ul>
                        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/app-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">App 1</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/product-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Product 1</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/branding-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Branding 1</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/books-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Book 1</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/app-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">App 2</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/product-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Product 2</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/branding-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Branding 2</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/books-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Book 2</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/app-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">App 3</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/product-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Product 3</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/branding-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Branding 3</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden cursor-pointer group">
                                <Image src="/images/portfolio/books-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit transition-transform duration-150 group-hover:scale-110" />
                                <div className="absolute z-3 inset-0 bg-[rgba(0,0,0,0.6)] px-[15px] py-[15px] transition-all duration-150 opacity-0 hover:opacity-100">
                                    <h4 className="px-[10px] py-[5px] bg-[#FF4A17] text-white inline-block font-normal text-sm">Book 3</h4>
                                    <p className="absolute left-0 right-0 text-center bottom-[10px] text-[16px] font-semibold inline-block text-[rgba(255,255,255,0.8)]">Lorem ipsum, dolor sit amet consectetur</p>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
                                        <EmojiZoomIn />
                                        <EmojiLink />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
