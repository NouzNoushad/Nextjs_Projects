import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Youtube from "@/components/youtube";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="xl:ml-[300px] xl:px-8 px-0">
                <Main />
                <AboutMe />
                <Projects />
                <Youtube />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
