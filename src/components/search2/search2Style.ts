import { makeStyles, createStyles, Theme, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      top: "-1.5rem",
      boxSizing: "border-box",
      justifySelf: "center",
      right: "0rem",
      overflow: "hidden",
      width: "inherit",
      [theme.breakpoints.down("xs")]: {
        width: "15rem",
        alignSelf: "right",

        top: "3.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    searchResult: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      width: "auto",
      borderColor: theme.palette.common.white,
      borderStyle: "solid",
      borderWidth: "0.1rem",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 0.5, 0.5),
      // maxHeight: "40rem",
      overflow: "auto",
      right: 0,
      top: "2.3rem",
      zIndex: 1000,
      position: "absolute",
      marginTop: "0.5rem",
      borderRadius: "0.20rem",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        top: "3.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      alignSelf: "stretch",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "auto",
      },
    },
    resultCount: {
      color: theme.palette.primary.contrastText,
    },
  })
);
