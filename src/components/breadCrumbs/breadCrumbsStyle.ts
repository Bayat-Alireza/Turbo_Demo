import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    link: {
      display: "flex",
      color: theme.palette.primary.dark,
    },
    icon: {
      marginRight: theme.spacing(0.25),
      color: theme.palette.primary.dark,
      width: 20,
      height: 20,
    },
    leafLink: {
      color: theme.palette.secondary.light,
    },
  })
);
