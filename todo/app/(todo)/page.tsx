import { DeleteIcon, EditIcon } from "@/components/svgs";
import { Todo } from "../interface/interface";

export default async function Home() {
    const response = await fetch("http://localhost:8000/get_todos")
    const jsonData = await response.json()
    const todos: Todo[] = jsonData.data
    return (
        <main className="mt-[10vh]">
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                    {
                        todos.map((todo) => (
                            <div key={todo.id} className="border-2 border-[#751aba] rounded-md px-5 py-5 bg-white">
                                <h2 className="text-[1.2rem] font-[600]">{todo.title}</h2>
                                <p>{todo.description}</p>
                                <div className="mt-3 flex flex-row items-center justify-end gap-2">
                                    <EditIcon className="size-6" />
                                    <DeleteIcon className="size-6" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
