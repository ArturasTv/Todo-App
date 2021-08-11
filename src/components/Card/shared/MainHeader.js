import { CardHeader } from "@material-ui/core";
import { Divider } from "@material-ui/core";

const MainHeader = ({ title }) => {
  return (
    <>
      <CardHeader style={{ textAlign: "center" }} title={title} />
      <Divider light />
    </>
  );
};

export default MainHeader;
