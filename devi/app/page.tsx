import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
import Status from "@/components/status";
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
                            <div className="">
                                <Image src="/images/portfolio/app-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/product-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/branding-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/books-1.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/app-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/product-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/branding-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/books-2.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/app-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/product-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/branding-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                            <div className="">
                                <Image src="/images/portfolio/books-3.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
