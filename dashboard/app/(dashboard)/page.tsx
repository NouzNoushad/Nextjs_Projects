import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar"

export default function Home() {
    return (
        <div className="flex h-screen antil text-gray-900 bg-gray-100">
            <Sidebar />
            <MainSection />
        </div>
    );
}
