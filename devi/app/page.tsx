import About from "@/components/about";
import Clients from "@/components/clients";
import Header from "@/components/header";
import MainHome from "@/components/home";
import Portfolio from "@/components/portfolio";
import ScrollUpButton from "@/components/scrollUpButton";
import Services2 from "@/components/services_2";
import Status from "@/components/status";
import Features from "@/components/features";
import Teams from "@/components/teams";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

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
            <Services />
            {/* Clients */}
            <Clients />
            {/* Features */}
            <Features />
            {/* Services 2 */}
            <Services2 />
            {/* Testimonials */}
            <Testimonials />
            {/* Portfolio */}
            <Portfolio />
            {/* Team */}
            <Teams />
            {/* Contact */}
            <Contact />
        </div>
    );
}
