import { makeStyles, createStyles, Theme, fade } from "@material-ui/core";

import { inherits } from "util";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "60vw",
      minHeight: "120vh",
      margin: theme.spacing("2rem", "auto"),
      padding: theme.spacing(1),
      borderRadius: "0.25rem",
      justifyContent: "center",
      background: theme.palette.background.default,
      color: theme.palette.primary.contrastText,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    elementHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "auto",
      margin: theme.spacing("1rem", "auto"),
    },

    elementBody: {
      margin: theme.spacing("1rem", "auto"),
      width: "auto",
      border: "solid 0.1rem lightGreen",
      overflow: "hidden",
      padding: theme.spacing(0, 0.5),
    },

    content: {
      // width: "auto",
      minWidth: "60vw",
      alignItems: "center",
      border: "solid 0.1rem white",
      padding: theme.spacing(1),
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    elementsOfElement: {
      display: "flex",
      flexDirection: "column",
      WebkitAlignItems: "flex-start",
      border: "0.1rem solid red",
      alignItems: "center",
      width: "auto",
      margin: theme.spacing("1rem", "auto"),
      height: "inherit",
      overflow: "hidden",
    },
    attributesOfElement: {
      display: "flex",
      flexDirection: "column",
      border: "0.1rem solid yellow",
      minHeight: "10vh",
      margin: theme.spacing("1rem", 1, 1),
      padding: theme.spacing(0, 2, 2, 0),
      minWidth: "10rem",
    },
    textField: {
      // margin: theme.spacing("1rem", "0.5rem", "0.25rem"),
      margin: "0.5rem",
      overflow: "hidden",
      // padding: theme.spacing(0.1, 1),
    },
    buttons: {
      margin: theme.spacing("0.25rem", "0.5rem", "0.25rem"),
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);
