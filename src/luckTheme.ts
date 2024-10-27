import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

const luckTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#40B53F",
            light:green[100],
            dark:green[900]
        },
        secondary:{
            main:"#00F535",
            light:"#ccff33",
            dark:green[900]
        },    
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    "&:focus": {
                        outline: "none",
                    },
                }
            }
        }
    }
})

export default luckTheme;