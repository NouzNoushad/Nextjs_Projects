interface Image {
    filename: string;
    file_path: string;
}

interface Assignee {
    username: string
    image: Image
}

export interface Task {
    id?: string;
    name: string;
    description: string;
    category: string;
    priority: string;
    status: string;
    assignee: Assignee;
    due_date: string;
    updated_at?: string;
    created_at?: string;
}