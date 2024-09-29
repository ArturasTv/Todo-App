import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../../../types/tasks";

type Props = {
  addTask: (task: Task) => void;
};

function MainForm({ addTask }: Props) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text || !day) {
      alert("Klaida!!!");
      return;
    }

    addTask({
      text,
      time: day,
      isChecked: false,
      isCompleted: false,
      id: uuidv4(),
    });

    setText("");
    setDay("");

    alert("Užduotis pridėta sėkmingai!");
  };

  return (
    <>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            id="standard-basic"
            label="Užduotis"
            className="Textfield"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <br />
        <Box mb={1}>
          <TextField
            className="Textfield"
            label="Data ir Laikas"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </Box>
        <br />
        <Box mb={1}>
          <Button variant="contained" color="primary" type="submit">
            Pridėti
          </Button>
        </Box>
      </form>
      <Divider />
    </>
  );
}

export default MainForm;
