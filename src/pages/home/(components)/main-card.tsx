import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardButton from "../../(components)/card-button.tsx";
import MainHeader from "../../(components)/card-header.tsx";
import useTodoListStore from "../../../stores/todo-list-store.ts";
import Tasks from "./tasks.tsx";

function MainCard() {
  const completeTasks = useTodoListStore((state) => state.completeTasks);

  return (
    <Card className="root">
      <MainHeader title="Užduočių sąrašas" />
      <CardContent>
        <Tasks />
      </CardContent>
      <CardActions className="footer">
        <CardButton onClick={() => completeTasks()} text="Atlikta" route="/" />
        <CardButton onClick={() => null} text="Pridėti" route="/add" />
      </CardActions>
    </Card>
  );
}

export default MainCard;
