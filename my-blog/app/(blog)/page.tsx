import { Blog } from "@prisma/client";
import BlogSection from "../components/blogSection";

export default async function Home() {
    const response = await fetch('http://localhost:3000/api/blog')
    const data = await response.json()
    const blogs: Blog[] = data.blogs

    return (
        <>
            <main className="pt-[10vh]">
                <div className="container-md">
                    <BlogSection blogs={blogs} />
                </div>
            </main>
        </>
    );
}
