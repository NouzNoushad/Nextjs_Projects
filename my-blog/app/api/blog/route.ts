import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// create blog
export const POST = async (request: NextRequest) => {
    const formData = await request.formData()

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const image = formData.get('image') as string
    const content = formData.get('content') as string
    const user = formData.get('user') as string
    const userImage = formData.get('userImage') as string

    console.log(`/////////// blog: title: ${title}, des: ${description}, cat: ${category}, img: ${image}, cont: ${content}, user: ${user}, userimg: ${userImage}`)

    try {
        const newBlog = await prisma.blog.create({
            data: {
                title,
                description,
                category,
                image,
                content,
                user,
                userImage,
            }
        })
        return NextResponse.json({ message: 'Blog created', blog: newBlog }, { status: 201 })
    } catch (error) {
        console.log('Error: ', error)
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
    }
}