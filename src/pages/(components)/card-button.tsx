import Button, { type ButtonProps } from "@mui/material/Button";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  route: string;
  onClick: () => void;
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
};

function CardButton({
  text,
  color = "primary",
  route,
  onClick,
  size = "large",
}: Props) {
  return (
    <Button
      size={size}
      onClick={onClick}
      component={Link}
      to={route}
      color={color}
      style={{ width: "100%", margin: "0 auto", display: "flex" }}
    >
      {text}
    </Button>
  );
}

export default CardButton;
