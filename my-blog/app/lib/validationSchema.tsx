import { z } from "zod"

export const BlogValidationSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(500),
    category: z.string().min(3),
    image: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, { method: "HEAD" })
            const contentType = res.headers.get("content-type")

            return contentType?.startsWith("image/")
        } catch (error) {
            console.log(error)
            return false
        }
    }),
    content: z.string().min(10)
})

export type BlogFormError = {
    [Key in keyof z.infer<typeof BlogValidationSchema>]?: string[]
}

export type BlogFormState = {
    errors?: BlogFormError,
    message?: string
} | undefined