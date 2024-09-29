import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardButton from "../../(components)/card-button.tsx";
import MainHeader from "../../(components)/card-header.tsx";
import useTodoListStore from "../../../stores/todo-list-store.ts";
import MainForm from "./main-form.tsx";

function FormCard() {
  const addTask = useTodoListStore((state) => state.addTask);

  return (
    <Card className="root">
      <MainHeader title="Pridėti naują užduotį" />
      <CardContent className="form">
        <MainForm addTask={addTask} />
      </CardContent>
      <CardActions className="footer">
        <CardButton onClick={() => null} text="Grįžti" route="/" />
      </CardActions>
    </Card>
  );
}

export default FormCard;
