import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { deepOrange, green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      fontSize: "0.70rem",
      width: "1.5rem",
      height: "1.5rem",
    },
    rounded: {
      color: "#fff",
      backgroundColor: green[500],
    },
  })
);
