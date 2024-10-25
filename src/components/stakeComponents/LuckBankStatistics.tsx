import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

const LuckBankStatistics = () => {
  const LuckTokensStaked = 0;
  const LastLuckBankEarnings = 0;

  return (
    <Box>
      <Typography variant="h4">LuckBankStatistics</Typography>
      <Grid container spacing={2} sx={{ bgcolor: "blue" }}>
        <Grid size={5}>
          <Typography>Luck tokens staked in the Luck Bank</Typography>
        </Grid>
        <Grid size={7}>
          <Typography>{LuckTokensStaked}</Typography>
        </Grid>
        <Grid size={5}>
          <Typography>Luck tokens max supply</Typography>
        </Grid>
        <Grid size={7}>
          <Typography>1,000,000</Typography>
        </Grid>
        <Grid size={5}>
          <Typography>Luck Bank ETH earnings from lottery</Typography>
        </Grid>
        <Grid size={7}>
          <Typography>{LastLuckBankEarnings}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LuckBankStatistics;
