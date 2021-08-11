import { Divider } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
const MainForm = ({ addTask, text, setText, day, setDay }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      alert("Klaida!!!");
      return;
    }

    addTask({ text, time: day, check: false });

    setText("");
    setDay("");

    alert("Užduotis pridėta sėkmingai!");
  };

  return (
    <>
      <Divider />
      <form onSubmit={onSubmit}>
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
};

export default MainForm;
