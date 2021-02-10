import { makeStyles, createStyles, Theme, fade } from "@material-ui/core";
import { Palette } from "@material-ui/icons";

import { inherits } from "util";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "75vw",
      boxSizing: "border-box",
      margin: theme.spacing(1, "auto"),
      position: "relative",
      overflow: "visible",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    searchBox: {
      color: "#fff",
      width: "100%",
    },
    listbox: {
      padding: 0,
    },
    option: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: "#FFF",
      color: "#333",
      "&:hover": {
        color: "#FFF",
        backgroundColor: "#757575",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        color: "#FFF",
        backgroundColor: "#757575",
      },
      "&:select": {
        color: "#FFF",
        backgroundColor: "#757575",
      },
    },
  })
);
