import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
          "scrollbar-color": "red",
        },
        "*::-webkit-scrollbar": {
          width: "1rem",
          height: "1rem",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#333",
          borderRadius: "0.25rem",
        },
        "::-webkit-scrollbar-track": {
          background: "#d1c4e9",
          borderRadius: "0.25rem",
        },
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#d1c4e9",
      light: "#ede7f6",
      dark: "#b39ddb",
      contrastText: "#311b92",
    },
    secondary: {
      main: "#c5cae9",
      light: "#e8eaf6",
      dark: "#9fa8da",
      contrastText: "#1a237e",
    },

    background: {
      default: "#0d47a1",
      paper: "#1976d2",
    },

    text: {
      primary: "#424242",
      disabled: "#bdbdbd",
      hint: "#ffe0b2",
      secondary: "#757575",
    },
    error: {
      main: "#f50057",
      dark: "#c51162",
      light: "#ff4081",
      contrastText: "#fce4ec",
    },
  },
});
