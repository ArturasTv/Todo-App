import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import Checkbox from "@mui/material/Checkbox";
import type { Task as TaskType } from "../../../types/tasks";

type Props = {
  task: TaskType;
  deleteTask: (id: TaskType["id"]) => void;
  checkTask: (id: TaskType["id"]) => void;
};

function Task({ task, deleteTask, checkTask }: Props) {
  return (
    <ListItem component="li" dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.isChecked}
          tabIndex={-1}
          disableRipple
          color="primary"
          onClick={() => checkTask(task.id)}
        />
      </ListItemIcon>
      <ListItemText
        id={task.id.toString()}
        primary={task.text}
        secondary={`${task.time.split("T").join(" ")}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => deleteTask(task.id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;
