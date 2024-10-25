import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LuckTokenIcon from "../../assets/LuckTokenIcon_removed_bg.png";

const YourWalletBalance = () => {
  const WalletBalance = 0;
  return (
    <Box>
      <Typography variant="h5">Your Wallet Balance</Typography>
      <Grid
        container
        spacing={2}
        sx={{
          bgcolor: "cyan",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Grid size={1}>
          <img
            src={LuckTokenIcon}
            alt="Luck Token Icon"
            width={100}
            height={100}
          />
        </Grid>
        <Grid size={7}>
          <Typography variant="h6">Luck Token</Typography>
        </Grid>
        <Grid size={4}>
          <Typography variant="body1">{WalletBalance}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YourWalletBalance;
