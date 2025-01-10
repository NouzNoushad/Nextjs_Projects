import { Todo } from "../interface/interface";
import TodoItems from "@/components/todoItems";

export default async function Home() {
    const response = await fetch("http://localhost:8000/get_todos")
    const jsonData = await response.json()
    const todos: Todo[] = jsonData.data
    return (
        <main className="mt-[10vh]">
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                    <TodoItems todos={todos}/>
                </div>
            </div>
        </main>
    );
}
