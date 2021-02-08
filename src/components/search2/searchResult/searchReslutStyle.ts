import { makeStyles, createStyles, Theme, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResultItem: {
      boxSizing: "border-box",
      display: "flex",
      width: "98%",

      borderRadius: "0.1rem",
      justifyItems: "center",
      margin: theme.spacing(0, 0.5, 0),
      padding: theme.spacing(0.5),
      wordWrap: "break-word",
      alignItems: "center",
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.main, 0.25),
        cursor: "pointer",
      },
    },

    active: {
      boxSizing: "border-box",
      display: "flex",
      width: "98%",
      borderRadius: "0.15rem",
      justifyItems: "center",
      margin: theme.spacing(0, 0.5, 0),
      padding: theme.spacing(0.5),
      wordWrap: "break-word",
      alignItems: "center",
      backgroundColor: fade(theme.palette.primary.light, 0.8),
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: fade(theme.palette.primary.light, 0.9),
        cursor: "pointer",
      },
    },
  })
);
