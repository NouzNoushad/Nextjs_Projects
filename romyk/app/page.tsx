import About from "@/components/about";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainHome from "@/components/home";
import ScrollUpButton from "@/components/scrollUpButton";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";

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
            {/* Service */}
            <Service />
            {/* Testimonial */}
            <Testimonial />
            {/* foooter */}
            <Footer />
        </div>
    );
}
