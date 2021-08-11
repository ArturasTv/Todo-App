import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const CardButton = ({ text, color, route, doneTasks }) => {
  return (
    <>
      <Button
        onClick={doneTasks}
        component={Link}
        to={route}
        color={color}
        style={{ width: "100%", margin: "0 auto", display: "flex" }}
      >
        {text}
      </Button>
    </>
  );
};

CardButton.defaultProps = {
  color: "primary",
  text: "Mygtukas",
  size: "large",
};

export default CardButton;
