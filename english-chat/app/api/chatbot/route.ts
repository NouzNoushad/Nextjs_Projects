import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server"

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_KEY,
})

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const userMessage = body.message;

        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: userMessage,
            config: {
                systemInstruction: "You are a friendly English teacher who explains grammar to students in simple terms. You ask questions and explain",
            }
        })

        const reply = response.text
        console.log('//////// reply: ', reply)

        return NextResponse.json({ chatbot: reply }, { status: 200 })
    } catch (error) {
        console.log('Error: ', error)
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
    }
}