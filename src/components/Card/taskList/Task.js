import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import { Checkbox } from "@material-ui/core";

const Task = ({ task, SetCheckBox, deleteTask }) => {
  return (
    <ListItem
      dense
      button
      role={undefined}
      onClick={() => SetCheckBox(task.id)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.check}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": 0 }}
          color="primary"
          onClick={() => SetCheckBox(task.id)}
        />
      </ListItemIcon>
      <ListItemText
        id={task.id}
        primary={task.text}
        secondary={`${task.time.split("T").join(" ")}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => deleteTask(task.id)}
          edge="end"
          aria-label="delete"
        >
          {/* <DeleteForeverOutlinedIcon /> */}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
