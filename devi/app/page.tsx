import ScrollUpButton from "@/components/scrollUpButton";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <header className="h-[12vh] py-8 fixed top-0 left-0 w-full bg-black z-50 transition-all duration-200">
                <div className="max-w-[1150px] mx-auto px-6 xl:px-0 text-white flex flex-row items-center justify-between h-full">
                    <a href="#">
                        <h1 className="text-3xl font-bold">Dewi</h1>
                    </a>
                    <nav className="flex flex-row items-center gap-[35px]">
                        <ul className="hidden lg:flex flex-row items-center justify-center gap-[35px] uppercase font-semibold text-sm">
                            <li><a className="relative inline-block after:absolute after:bottom-[-6px] after:left-0 after:h-[0.13rem] after:bg-[#FF4A17] after:w-full" href="#">Home</a></li>
                            <li><a className="nav-link" href="#">About</a></li>
                            <li><a className="nav-link" href="#">Services</a></li>
                            <li><a className="nav-link" href="#">Portfolio</a></li>
                            <li><a className="nav-link" href="#">Team</a></li>
                            <li><a className="nav-link" href="#">Dropdown</a></li>
                            <li><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                        <div className="flex flex-row items-center space-x-[20px]">
                            <button className="border-2 border-white px-2 py-2 rounded-sm uppercase text-xs min-w-[8rem] font-medium cursor-pointer transition-colors duration-150 hover:bg-[#FF4A17] hover:text-white hover:border-[#FF4A17]">
                                Get Started
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
