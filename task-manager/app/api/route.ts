import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const date = formData.get('date')
    const compeleted = formData.get('completed')
    const important = formData.get('important')

    console.log(`////////// task: title: ${title}, des: ${description}, date: ${date}, comp: ${compeleted}, imp: ${important} `)

    try {
        return NextResponse.json({ message: 'Task created' }, { status: 201 })
    } catch (error) {
        console.log('Error:', error)
        return NextResponse.json({ error: 'Failed to create task' }, { status: 500 })
    }
}