import CasinoIcon from "@mui/icons-material/Casino";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InfoIcon from "@mui/icons-material/Info";
import LuckTokenLogo from "../assets/LuckTokenLogo-remove_bg_big.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const NavLinks = [
  {
    name: "Play",
    icon: <CasinoIcon />,
    link: "/",
  },
  {
    name: "Stake",
    icon: <AttachMoneyRoundedIcon />,
    link: "/stake",
  },
  {
    name: "Contact",
    icon: <ContactSupportIcon />,
    link: "/contact",
  },
  {
    name: "Documents",
    icon: <ImportContactsIcon />,
    link: "/documents",
  },
  {
    name: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 130,
        m: 1,
        height: "92vh",
        position: "fixed", // Fixes the navbar's position
        top: "50%", // Centers vertically
        left: 0, // Aligns to the left edge of the viewport
        transform: "translateY(-50%)", // Centers element vertically by shifting up 50% of its height
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "start",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={LuckTokenLogo}
          alt="Luck Navigation Logo"
          sx={{
            width: "100%",
            height: "100%",
            my: 2,
          }}
        />
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NavLinks.map((item) => (
            <Button
              key={item.name}
              onClick={() => navigate(item.link)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: pathname === item.link ? "primary.dark" : "white",
                textTransform: "none",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
