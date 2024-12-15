export const convertCategory = (category: string) => {
    switch (category) {
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