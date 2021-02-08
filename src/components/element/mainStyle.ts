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

    searchBox:{
      color:"#fff",
      width:"100%"
    }
  })
);
