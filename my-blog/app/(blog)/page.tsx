import { Blog } from "@prisma/client";
import LeftSection from "../components/leftSection"
import RightSection from "../components/rightSection";

export default async function Home() {
    const response = await fetch('http://localhost:3000/api/blog')
    const data = await response.json()
    const blogs: Blog[] = data.blogs

    return (
        <>
            <main className="pt-[10vh]">
                <div className="container-md">
                    <div className="flex lg:flex-row flex-col h-auto">
                        <LeftSection />
                        <RightSection blogs={blogs} />
                    </div>
                </div>
            </main>
        </>
    );
}
