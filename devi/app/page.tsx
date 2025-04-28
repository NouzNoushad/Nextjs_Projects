import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import Portfolio from "@/components/portfolio";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
import Status from "@/components/status";
import Image from 'next/image'
import { CheckIcon, EmojiBinoculars, EmojiBoxSeam, EmojiBrightnessHigh, EmojiCommand } from "@/lib/icons";

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
            <div className="bg-white">
                <div className="container-width py-[3rem]">
                    {/* Feature Tab */}
                    <ul className="flex flex-row items-center justify-center gap-[20px]">
                        <li className="bg-[#FF4A17] px-[20px] py-[25px] border border-[#FF4A17] text-white flex flex-row items-center gap-[15px] cursor-pointer">
                            <div className="">
                                <EmojiBinoculars fillColor='#fff' className="size-12" />
                            </div>
                            <h4 className="hidden lg:inline-block font-semibold text-[17px]">Modi sit est dela pireda nest</h4>
                        </li>
                        <li className="px-[20px] py-[25px] border border-gray-300 text-white flex flex-row items-center gap-[15px] transition-colors duration-200 hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBoxSeam fillColor='#273D4E' className="size-12" />
                            </div>
                            <h4 className="hidden lg:inline-block text-[#273D4E] font-semibold">Unde praesenti mara setra le</h4>
                        </li>
                        <li className="px-[20px] py-[25px] border border-gray-300 text-white flex flex-row items-center gap-[15px] transition-colors duration-200 hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBrightnessHigh fillColor='#273D4E' className="size-12" />
                            </div>
                            <h4 className="hidden lg:inline-block text-[#273D4E] font-semibold">Pariatur explica nitro dela</h4>
                        </li>
                        <li className="px-[20px] py-[25px] border border-gray-300 text-white flex flex-row items-center gap-[15px] transition-colors duration-200 hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiCommand fillColor='#273D4E' className="size-12" />
                            </div>
                            <h4 className="hidden lg:inline-block text-[#273D4E] font-semibold">Nostrum qui dile node</h4>
                        </li>
                    </ul>
                    {/* Feature Tab View */}
                    <div className="mt-[2rem]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] lg:gap-[40px] font-medium">
                            <div className="space-y-5 order-2 lg:order-1">
                                <h3 className="text-[28px] leading-9 font-bold text-[#273D4E]">Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
                                <ul className="space-y-2">
                                    <li className="flex flex-row items-center gap-2">
                                        <div><CheckIcon className="size-5" /></div>
                                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
                                    <li className="flex flex-row items-center gap-2">
                                        <div><CheckIcon className="inline-block size-5" /></div>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p></li>
                                    <li className="flex flex-row items-start gap-2">
                                        <div><CheckIcon className="inline-block size-5" /> </div>
                                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p></li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>
                            </div>
                            <div className="order-1 lg:order-2">
                                <Image src="/images/about.jpg" alt="about" width={1000} height={1000} className="w-full h-fit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services 2 */}
            <Services2 />
            {/* Testimonials */}
            {/* Portfolio */}
            <Portfolio />
        </div>
    );
}
