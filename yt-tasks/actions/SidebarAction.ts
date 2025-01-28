import { useGlobalState } from "@/context/globalProvider"
import { Task } from "@/interface/task_interface"

export const SidebarAction = () => {

    const { setGTasks, setSidebarStatus, sidebarStatus, resetShowMenu } = useGlobalState()

    const onChangeStatus = (tasks: Task[], status: string) => {
        let filterList = []

        resetShowMenu()
        setSidebarStatus(status)

        if (status === 'tasks') {
            filterList = tasks
        } else {
            filterList = tasks.filter((task) => {
                const taskStatus = task.status.trim().toLowerCase()
                const query = status.trim().toLowerCase()
                return taskStatus === query
            })
        }
        setGTasks(filterList)
    }

    return {
        onChangeStatus,
        status: sidebarStatus,
    }
}