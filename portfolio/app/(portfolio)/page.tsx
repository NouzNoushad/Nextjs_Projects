import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Main from "@/components/main";
import Projects from "@/components/projects";
import Youtube from "@/components/youtube";

export default function Home() {
    return (
        <>
            <Main />
            <AboutMe />
            <Projects />
            <Youtube />
            <Contact />
        </>
    );
}
