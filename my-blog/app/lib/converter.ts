export const convertCategory = (category: string) => {
    switch (category) {
        case 'all':
            return 'All'
        case 'latest':
            return 'Latest'
        case 'notionHq':
            return 'Notion HQ'
        case 'forTeams':
            return 'For Teams'
        case 'tech':
            return 'Tech'
        case 'inspiration':
            return 'Inspiration'
        case 'pioneers':
            return 'Pioneers'
        default:
            return 'First Blog'
    }
}

export const convertDate = (date: Date): string => {
    const newDate = new Date(date)
    const dateString = newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return dateString
}