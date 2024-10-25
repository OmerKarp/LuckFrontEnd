import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Deposit = () => {
  return (
    <Box>
      <TextField label="LCK amount" variant="filled" />
      <Button variant="contained" sx={{ p: 2 }}>
        Stake
      </Button>
    </Box>
  );
};

export default Deposit;
