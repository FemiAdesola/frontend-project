import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#000000",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});
