import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import DropDown from '../dropdown/DropDown';
import IconLayout from '../../Icon/IconLayout';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: "flex",
    alignItems: "center",
    fontSize: "inherit",
    [theme.breakpoints.down("sm")]: {
      width: '80%'
    },
    [theme.breakpoints.up("md")]: {
      width: '80%'
    },
    [theme.breakpoints.up("lg")]: {
      width: '80%'
    },

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  myrounded: {
    borderRadius: 30
  }

}));

export default function () {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root} classes={{ rounded: classes.myrounded }} elevation={3} >
      <DropDown></DropDown>
      <InputBase fontSize=""
        className={classes.input}
        placeholder="Example Man, Scania, Sounds etc..."
        inputProps={{ "aria-label": "Example Man, Scania, Sounds ..." }}
      />
      <IconLayout>
        <SearchIcon fontSize="small"></SearchIcon>
      </IconLayout>

    </Paper >
  );
}
