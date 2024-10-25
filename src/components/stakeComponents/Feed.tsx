import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import YourWalletBalance from "./YourWalletBalance";
import Deposit from "./Deposit";
import LuckBankStatistics from "./LuckBankStatistics";
import LuckBankUserBalance from "./LuckBankUserBalance";

const Feed = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "cyan", justifyContent: "space-between" }}
    >
      <Grid size={7}>
        <Paper elevation={10}>
          <LuckBankStatistics />
        </Paper>
        <Paper elevation={10} sx={{ mt: 6 }}>
          <Deposit />
        </Paper>
      </Grid>

      <Grid size={4}>
        <Paper elevation={10}>
          <YourWalletBalance />
        </Paper>

        <Paper elevation={10} sx={{ mt: 8 }}>
          <LuckBankUserBalance />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Feed;
