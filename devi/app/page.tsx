import Header from "@/components/header";
import ScrollUpButton from "@/components/scrollUpButton";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <Header />
            {/* Main */}
            <div className="relative min-h-screen bg-[url('/images/hero-bg.jpg')] h-full w-full before:absolute before:h-full before:w-full before:bg-[#000910] before:opacity-[0.7] before:top-0 before:left-0 context-center bg-cover bg-center">

            </div>
        </div>
    );
}
