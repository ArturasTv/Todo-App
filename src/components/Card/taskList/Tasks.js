import Task from "./Task";
import { Divider } from "@material-ui/core";
const Tasks = ({ tasks, SetCheckBox, deleteTask }) => {
  return (
    <>
      <Divider />
      {tasks.map(
        (task) =>
          !task.done && (
            <Task
              key={task.id}
              task={task}
              SetCheckBox={SetCheckBox}
              deleteTask={deleteTask}
            />
          )
      )}
      <Divider />
    </>
  );
};

export default Tasks;
