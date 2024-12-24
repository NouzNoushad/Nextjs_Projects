import Sidebar from "@/components/sidebar";

export default function Home() {
    return (
        <main className="h-screen">
            <div className="px-5 py-5 h-full text-white">
                <div className="flex lg:flex-row items-center gap-5 h-full">
                    <Sidebar />
                    <div className="lg:w-5/6 w-full bg-panel rounded-lg lg:border-2 lg:border-[#282828] h-full">
                    </div>
                </div>
            </div>
        </main>
    );
}
