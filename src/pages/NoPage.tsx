import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      404 Not Found
      <Button variant="outlined" href="/">
        To Home Page
      </Button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NoPage;
