import { Box, Container } from "@mui/material";
import SideBar from "../components/SideBar";
import ConnectWallet from "../components/ConnectWallet";
import Header from "../components/stakeComponents/Header";
import Feed from "../components/stakeComponents/Feed";
import "./StakePage.css";

const StakePage = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SideBar />
      <ConnectWallet />
      <Container
        sx={{
          bgcolor: "white",
          width: "80vw", // Define a width less than full viewport width
          height: "80vh", // Define a height less than full viewport height
          margin: 0,
        }}
      >
        <Header />
        <Feed />
      </Container>
    </Box>
  );
};

export default StakePage;
