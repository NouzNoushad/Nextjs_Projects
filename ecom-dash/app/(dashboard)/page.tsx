import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="flex h-screen text-gray-900 bg-secondary">
            {/* Sidebar */}
            <Sidebar />
            {/* MainSection */}
            <MainSection />
        </div>
    );
}
