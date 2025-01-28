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
    "in progress",
    "on review",
    "on hold",]
