import { FlutterIcon, YoutubeIcon } from "@/components/svgs";
import Youtube from "@/components/youtube";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="mt-[10vh]">
                <div className="flex items-center justify-center h-[calc(100vh-10vh)]">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="home-image">
                            <Image src={'/profile.jpg'} height={300} width={300} alt="profile" className="rounded-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] py-2 px-2" />
                        </div>
                        <div className="flex flex-col items-center md:items-start justify-center h-full text-white gap-2">
                            <h1 className="home-title">Noushad C A</h1>
                            <h3 className='home-subtitle'>
                                <span><FlutterIcon className="size-8" /></span>
                                Flutter Developer
                            </h3>
                            <h3 className='home-subtitle'>
                                <span><YoutubeIcon className="size-8" /></span>
                                Youtuber
                            </h3>
                            <div className="mt-5">
                                <button className="bg-white rounded-md primary-color font-bold px-5 py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                    <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">My Work</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Youtube />
        </>
    );
}
