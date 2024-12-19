import { FlutterIcon, YoutubeIcon } from "@/components/svgs";
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
            <main>
                <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/_iz8fBwU4po?si=xzunnUu2qyoyLReO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/zzblq3KokYk?si=f2HLZdV72yan4m5F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/SIdH4AbePjU?si=rQJNy1LwTQQIv_m6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/sTUmuRxZ4Wk?si=Z4AzmUppQUOLlBDr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/FsGJFaeLPMc?si=lMCJwtOdyxCu5hBW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/i7pu1NZMJoA?si=OwtGCDS2ALwPrtTT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/uuj1sTcFFdo?si=oeoSYUKABByGV7CW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/vHvgSZ-JLGU?si=D8Bi0jeN5CaE73Ww" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/tx5xn8OcI9Q?si=dcDhT_0wYxz0A_ns" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/zG2Uyrr9y6A?si=tS15d0ectABfkrXl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/zDToEzwECDU?si=R4tOU0S5PgZiWMNC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <iframe className="w-full h-[220px] rounded-md object-cover" src="https://www.youtube.com/embed/ksaXszTHoys?si=HuX-OM6Nn8KRhmCg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </main>
        </>
    );
}
