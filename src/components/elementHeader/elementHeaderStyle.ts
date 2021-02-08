import { makeStyles, createStyles, Theme, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      margin: theme.spacing(0.5, 0, 0.5),
      // border: "solid 0.1rem red",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        "& >*": { margin: theme.spacing(0) },
      },
    },

    minMax: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      // flexWrap: "wrap",
      width: "auto",
      "& >*": { margin: theme.spacing(0, 1, 0) },
      [theme.breakpoints.down("xs")]: {
        display: "block",
        "& >*": { margin: theme.spacing(0, 0, 0, 0) },
      },
      // border: "solid 0.1rem white",
    },

    element: {
      display: "flex",
      padding: theme.spacing(0, 1, 0),
      justifyContent: "space-between",
      alignItems: "center",
      margin: theme.spacing(0.5, 0, 0.5),
      flexWrap: "wrap",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      // border: "solid 0.1rem yellow",
    },

    elementType: {
      display: "flex",
      alignItems: "center",

      flexWrap: "wrap",
      justifySelf: "flex-start",
      margin: theme.spacing(1),
      whiteSpace: "nowrap",
      border: "solid 0.1rem gray",
    },

    searchResult: {
      width: 300,
      position: "relative",
    },
  })
);
