import About from "@/components/about";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";
import Status from "@/components/status";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <Header />
            {/* Main */}
            <MainHome />
            {/* About */}
            <About />
            {/* Status */}
            <Status />
        </div>
    );
}
