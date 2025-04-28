import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import Portfolio from "@/components/portfolio";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
import Status from "@/components/status";
import { EmojiBinoculars, EmojiBoxSeam, EmojiBrightnessHigh, EmojiCommand } from "@/lib/icons";

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
                    <div className=""></div>
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
