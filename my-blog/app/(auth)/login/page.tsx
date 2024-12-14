import Localization from "@/app/components/localization";
import { Github, Google } from "@/app/lib/svgs";

export default function Login() {
    return (
        <>
            <nav className='h-[10vh]'>
                <div className="container h-full">
                    <div className="flex flex-row items-center h-full gap-3">
                        <h1 className='text-[1.2rem] font-bold border-2 border-black h-[30px] w-[30px] flex items-center justify-center'>N</h1>
                        <div className="h-[20px] w-[1px] bg-gray-300"></div>
                        <Localization/>
                    </div>
                </div>
            </nav>
            <main className="py-[5rem]">
                <div className="max-w-[400px] mx-auto px-5 xl:px-0">
                    <h2 className="text-[1.3rem] font-bold">Think it. Make it.<br/>
                        <span className="text-gray-400">Log in to your Notion account</span>
                    </h2>
                    <div className="my-8 space-y-2">
                        <button className="credential-btn">
                            <Google className="size-4"/>
                            <span>Continue with Google</span>
                        </button>
                        <button className="credential-btn">
                            <Github className="size-4" />
                            <span>Continue with Github</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
