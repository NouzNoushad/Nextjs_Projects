import { z } from "zod";

export const TaskValidationSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    date: z.string().min(2),
    compeleted: z.boolean().optional(),
    important: z.boolean().optional(),
})

export type TaskFormError = {
    [Key in keyof z.infer<typeof TaskValidationSchema>]?: string[]
}

export type TaskFormState = {
    errors?: TaskFormError,
    message?: string
} | undefined