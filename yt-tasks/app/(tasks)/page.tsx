import MainScreen from "@/components/MainScreen";
import Sidebar from "@/components/Sidebar";
import { Task } from "@/interface/task_interface";

export default async function Home() {
    const response = await fetch('http://localhost:8020/get_tasks')
    const responseJson = await response.json()
    const tasks: Task[] = responseJson.data

    return (
        <main>
            <div className="flex flex-row">
                <Sidebar tasks={tasks} />
                <MainScreen tasks={tasks} />
            </div>
        </main>
    );
}
