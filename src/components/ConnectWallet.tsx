import { Button, Typography } from "@mui/material";

const ConnectWallet = () => {
  return (
    <Button
      variant="contained"
      size="small"
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
