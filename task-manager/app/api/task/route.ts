import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// create task
export const POST = async (request: NextRequest) => {

    try {
        const formData = await request.formData()
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const dateInput = formData.get('date') as string | null
        const completed = formData.get('completed') === 'true'
        const important = formData.get('important') === 'true'

        const date = dateInput ? new Date(dateInput) : undefined

        console.log(`////////// task: title: ${title}, des: ${description}, date: ${date}, comp: ${completed}, imp: ${important} `)

        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                date,
                completed,
                important,
            }
        })
        return NextResponse.json({ message: 'Task created', task: newTask }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: `Error: ${error}` }, { status: 500 })
    }
}

// get tasks
export const GET = async () => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: [
                {
                    updatedAt: 'desc'
                }
            ]
        })

        return NextResponse.json({ tasks }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: `Error: ${error}` }, { status: 500 })
    }
}