import { Task } from "@/interface/task_interface"

// format date
export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-GB').format(date)
}

export const categories = ["ui design",
    "development",
    "testing",
    "deployment",
    "maintenance",
    "research",
    "marketing",
    "content creation"]

export const priorities =
    ["high",
        "medium",
        "low"]

export const statusList = ["completed",
    "on review",
    "on hold",
    "in progress",]

export const copyWith = (task: Task, updates: Partial<Task>) : Task => {
    return {
        ...task,
        ...updates,
        assignee: {
            ...task.assignee,
            ...updates.assignee,
            image: {
                ...task.assignee.image,
                ...updates.assignee?.image,
            }
        }
    }
}