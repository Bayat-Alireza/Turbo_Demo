import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#0288d1",
      light: "#424242",
      dark: "#01579b",
      contrastText: "#eceff1",
    },
    secondary: {
      main: "#00838f",
      light: "#0097a7",
      dark: "#006064",
      contrastText: "#eceff1",
    },

    background: {
      default: "#263238",
      paper: "#78909c",
    },

    text: {
      primary: "#e1f5fe",
      disabled: "#00acc1",
      hint: "#81d4fa",
      secondary: "#e0f7fa",
    },

    error: {
      main: "#f50057",
      dark: "#c51162",
      light: "#ff4081",
      contrastText: "#fce4ec",
    },
  },
});
