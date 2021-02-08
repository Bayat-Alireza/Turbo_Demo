import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: theme.palette.background.default,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    inputRoot: {
      color: theme.palette.secondary.light,
    },
    inputInput: {
      display: "flex",
      padding: theme.spacing(1, 1, 1, 0),
      textAlign: "left",
      justifyContent: "flex-start",
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100vw",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%",
        },
      },
    },
  })
);
