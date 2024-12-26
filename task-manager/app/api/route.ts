import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    try {
        console.log(request)
    } catch (error) {
        console.log('Error:', error)
        return NextResponse.json({ error: 'Failed to create task' }, { status: 500 })
    }
}