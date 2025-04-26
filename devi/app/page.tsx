import Header from "@/components/header";
import ScrollUpButton from "@/components/scrollUpButton";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <Header />
            {/* Main */}
            <div className="relative min-h-screen bg-[url('/images/hero-bg.jpg')] h-full w-full before:absolute before:h-full before:w-full before:bg-[#000910] before:opacity-[0.7] before:top-0 before:left-0 context-center bg-cover bg-center">
                <div className="relative max-w-[800px] mx-auto px-5 xl:px-0 flex flex-col space-y-5 items-center justify-center h-screen text-white">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">PLAN. LAUNCH. GROW.</h1>
                    <p className="md:text-2xl sm:text-xl text-center font-bold text-[#DADCDD]">We are team of talented designers making websites with Bootstrap</p>
                    <div className="flex md:flex-row flex-col items-center gap-3">
                        <button className="border-2 border-[#FF4A17] px-3 py-2 rounded-sm uppercase text-sm min-w-[10rem] font-medium tracking-wider cursor-pointer transition-colors duration-150 bg-[#FF4A17] hover:bg-[#FF4A17] hover:text-white hover:border-[#FF4A17]">Get Started</button>
                        <a href="" className="flex flex-row items-center space-x-2">
                            <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FF4A17" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" /></svg>
                            <span>Watch Video</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
