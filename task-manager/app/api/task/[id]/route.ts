import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// delete task
export const DELETE = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params
        const deleteTask = await prisma.task.delete({
            where: {
                id,
            }
        })
        return deleteTask ? NextResponse.json({ message: 'Task deleted' }, { status: 200 }) : NextResponse.json({ error: 'Delete failed' }, { status: 400 })
    } catch (error) {
        return NextResponse.json({ error: `Error: ${error}` }, { status: 500 })
    }
}