import MainScreen from "@/components/MainScreen";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <main>
            <div className="flex flex-row">
                <Sidebar />
                <MainScreen />
            </div>
        </main>
    );
}
