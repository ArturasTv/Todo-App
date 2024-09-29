import Divider from "@mui/material/Divider";
import useTodoListStore from "../../../stores/todo-list-store";
import Task from "./task";

function Tasks() {
  const tasks = useTodoListStore((state) => state.tasks);
  const deleteTask = useTodoListStore((state) => state.deleteTask);
  const checkTask = useTodoListStore((state) => state.checkTask);

  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <>
      {notCompletedTasks.length === 0 ? (
        "Užduočių sąrašas tuščias"
      ) : (
        <>
          <Divider />
          {notCompletedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              checkTask={checkTask}
            />
          ))}{" "}
          <Divider />
        </>
      )}
    </>
  );
}

export default Tasks;
