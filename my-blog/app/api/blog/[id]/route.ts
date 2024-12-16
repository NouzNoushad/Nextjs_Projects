import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// get blog by id
export const GET = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: id,
            }
        })
        return blog ? NextResponse.json({ blog }, { status: 200 }) : NextResponse.json({ error: "Unable to find blog" }, { status: 400 })
    } catch (error) {
        console.log('Error: ', error)
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
    }
}