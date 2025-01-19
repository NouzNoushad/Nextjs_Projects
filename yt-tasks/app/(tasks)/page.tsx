import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="flex flex-row h-screen">
                <Sidebar />
                <div className="w-4/5 h-full">Universe</div>
            </div>
        </main>
    );
}
