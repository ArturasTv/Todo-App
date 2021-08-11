import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import MainHeader from "../shared/MainHeader";
import CardButton from "../shared/CardButton";
import Tasks from "./Tasks";

const MainCard = ({ tasks, SetCheckBox, deleteTask, doneTasks }) => {
  return (
    <Card className="root">
      <MainHeader title="Užduočių sąrašas" />
      <CardContent>
        <Tasks
          tasks={tasks}
          SetCheckBox={SetCheckBox}
          deleteTask={deleteTask}
        />
      </CardContent>
      <CardActions className="footer">
        <CardButton doneTasks={doneTasks} text="Atlikta" route="/" />
        <CardButton text="Pridėti" route="/add" />
      </CardActions>
    </Card>
  );
};

export default MainCard;
