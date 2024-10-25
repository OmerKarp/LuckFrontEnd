import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <Button
      className="noOutline"
      variant="contained"
      disableRipple
      sx={{ color: "white" }}
    >
      hey
    </Button>
  );
}

export default App;
