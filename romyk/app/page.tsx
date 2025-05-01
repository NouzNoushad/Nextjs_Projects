import About from "@/components/about";
import Featured from "@/components/featured";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <Header />
            {/* Home */}
            <MainHome />
            {/* About */}
            <About />
            {/* Featured */}
            <Featured />
        </div>
    );
}
