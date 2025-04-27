import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import Portfolio from "@/components/portfolio";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
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
            {/* Services */}
            {/* Clients */}
            <Clients />
            {/* Features */}
            {/* Services 2 */}
            <Services2 />
            {/* Testimonials */}
            {/* Portfolio */}
            <Portfolio />
        </div>
    );
}
