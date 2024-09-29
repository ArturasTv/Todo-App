import MaterialCardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";

type Props = {
  title: string;
};

function CardHeader({ title }: Props) {
  return (
    <>
      <MaterialCardHeader style={{ textAlign: "center" }} title={title} />
      <Divider light />
    </>
  );
}

export default CardHeader;
