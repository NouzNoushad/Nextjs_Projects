import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";
import Status from "@/components/status";
import { EmojiBarChart, EmojiBinoculars, EmojiBriefcase, EmojiBrightnessHighFill, EmojiCalendarWeek, EmojiCardChecklist } from "@/lib/icons";

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
            <div className="bg-[#F0F3F9]">
                <div className="container-width py-[3rem]">
                    <div className="space-y-1">
                        <h2 className="relative inline-block uppercase text-gray-500 tracking-wider after:absolute after:h-[0.1rem] after:w-[120px] after:bg-[#FF4A17] after:ml-3 after:my-3">Services</h2>
                        <p className="lg:text-4xl md:text-3xl text-2xl leading-9 font-extrabold text-[#273D4E]">CHECK OUR SERVICES</p>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-10">
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBriefcase />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Lorem Ipsum</a></h4>
                                <p className="text-sm font-medium">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiCardChecklist />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Dolor Sitema</a></h4>
                                <p className="text-sm font-medium">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBarChart />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Sed ut perspiciatis</a></h4>
                                <p className="text-sm font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBinoculars />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Magni Dolores</a></h4>
                                <p className="text-sm font-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiBrightnessHighFill />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Nemo Enim</a></h4>
                                <p className="text-sm font-medium">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-8 border border-gray-300 flex flex-row gap-5 transition-colors duration-200 group hover:border-[#FF4A17] cursor-pointer">
                            <div className="">
                                <EmojiCalendarWeek />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-[#273D4E] text-lg transition-colors duration-200 group-hover:text-[#FF4A17]"><a href="#">Eiusmod Tempor</a></h4>
                                <p className="text-sm font-medium">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
