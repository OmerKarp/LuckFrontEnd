import { Button, Typography } from "@mui/material";
import React from "react";

const ConnectWallet = () => {
  return (
    <Button
      variant="contained"
      size="small"
      className="myButton"
      sx={{
        color: "white",
        m: 3,
        position: "absolute",
        top: 4,
        right: 4,
      }}
    >
      <Typography>Connect Wallet</Typography>
    </Button>
  );
};

export default ConnectWallet;
