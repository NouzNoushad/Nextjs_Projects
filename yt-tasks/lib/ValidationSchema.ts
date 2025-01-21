import { z } from "zod";

export const TaskFormSchema = z.object({
    name: z.string().min(2, { message: 'Name is required' }).trim(),
    username: z.string().min(2, { message: 'Assignee name is required' }).trim()
})

export type TaskFormError = z.infer<typeof TaskFormSchema>

export type TaskState = | {
    errors?: {
        name?: string[]
        username?: string[]
    },
    message?: string
} | undefined