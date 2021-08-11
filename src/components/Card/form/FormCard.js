import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import MainHeader from "../shared/MainHeader";
import MainForm from "./MainForm";
import { useState } from "react";
import CardButton from "../shared/CardButton";

const FormCard = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  return (
    <Card className="root">
      <MainHeader title="Pridėti naują užduotį" />
      <CardContent className="form">
        <MainForm
          addTask={addTask}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
        />
      </CardContent>
      <CardActions className="footer">
        <CardButton text="Grįžti" route="/" />
      </CardActions>
    </Card>
  );
};

export default FormCard;
