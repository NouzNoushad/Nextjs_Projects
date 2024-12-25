import Sidebar from "@/components/sidebar";
import Tasks from "@/components/tasks";

export default function Home() {
    return (
        <main className="h-screen">
            <div className="px-5 py-5 h-full text-white">
                <div className="flex lg:flex-row items-center gap-5 h-full">
                    <Sidebar />
                    <Tasks />
                </div>
            </div>
        </main>
    );
}
